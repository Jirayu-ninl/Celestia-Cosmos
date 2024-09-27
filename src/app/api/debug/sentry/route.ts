import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export const POST = async (request: Request) => {
  const req = await request.json()
  if (!req.body) {
    throw new Error(
      `Debug: Throw error (API) from TheIceJi-COSMOS: ${process.env.NODE_ENV}`,
    )
  }
  return NextResponse.json({ status: 'ok' })
}
