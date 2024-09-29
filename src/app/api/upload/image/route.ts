import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { uuidv7 } from 'uuidv7'
import { s3 } from '@nexel/nextjs/libs/storage'
import { convertFromReadableStream } from '@nexel/nextjs/utils/data'
import { optimize } from '@nexel/nextjs/utils/image'
import { setResponse } from '@nexel/nextjs/utils/server/response.status'
import { getSession } from '@backend/auth/aurora'
import { prisma } from '@backend/database'

export const PUT = async (req: Request) => {
  const session = await getSession()

  if (!session || !session.user || !session.user.id) {
    return setResponse.unauthorized()
  }

  try {
    const headersList = headers()
    const _fileSize = parseInt(headersList.get('content-size') ?? '0')
    // const _fileType = headersList.get('content-Type')

    const { searchParams } = new URL(req.url)
    const _dir = searchParams.get('dir')
    const _bucketSuffix = searchParams.get('bucketSuffix')
    const _name = searchParams.get('name')
    const _description = searchParams.get('description')

    // if (!name) throw new Error('File name not provided')
    const imageId = uuidv7()

    const data = await convertFromReadableStream.toBuffer(
      req.body as ReadableStream,
    )
    if (_fileSize !== data.length) throw new Error('Lost data while uploading')

    const key = `${_dir}.${imageId}.jpg`

    const bucketName = _bucketSuffix
      ? process.env.S3_UPLOAD_BUCKET + '.' + _bucketSuffix
      : process.env.S3_UPLOAD_BUCKET

    const isAvatar =
      _bucketSuffix === 'users' && _dir?.split('.')[0] === 'avatar'
    const optimizeConfig = isAvatar
      ? {
          maxWidth: 256,
          maxHeight: 256,
          quality: 80,
        }
      : {
          maxWidth: 2048,
          maxHeight: 2048,
          quality: 50,
        }

    const optimizeImageBuffer = await optimize.optimizeAndConvertToJpg(
      data,
      optimizeConfig,
    )

    if (!optimizeImageBuffer) throw new Error('Error while optimizing image')

    const upload = await s3.putObject({
      bucket: bucketName!,
      key,
      file: {
        body: optimizeImageBuffer,
        contentType: 'image/jpeg',
        metadata: {
          'Image-Key': `${_dir}.${imageId}`,
          'User-Id': session.user.id,
        },
      },
    })

    if (!upload) throw new Error('Error while uploading to s3')

    const asset = await prisma.asset.create({
      data: {
        ...(_name && { name: decodeURIComponent(_name) }),
        ...(_description && { description: decodeURIComponent(_description) }),
        key,
        dir: _dir ?? '',
        imageId,
        userId: session.user.id,
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        ...asset,
      },
      _metaData: { upload, asset },
    })
  } catch (e) {
    if (
      typeof e === 'object' &&
      e &&
      'message' in e &&
      typeof e.message === 'string'
    ) {
      throw new Error(e.message)
    } else {
      throw new Error('Error while uploading')
    }
  }
}
