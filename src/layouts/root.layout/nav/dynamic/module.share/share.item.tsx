import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LineShareButton,
  WeiboShareButton,
} from 'next-share'
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaLine,
  FaWeibo,
  FaRegClipboard,
} from 'react-icons/fa6'
import { DynamicNavShare, DynamicNavShareSocial } from '@/store'
import { ShareItemLayout } from './share.layout'

interface ShareModuleProps {
  _dataState: DynamicNavShare
  index: number
}

const ShareToFacebook: React.FC<ShareModuleProps> = ({ _dataState, index }) => {
  return (
    <>
      <FacebookShareButton
        url={_dataState.url}
        quote={_dataState.title}
        hashtag={'theiceji'}
      >
        <ShareItemLayout title='Facebook' index={index}>
          <FaFacebookF className='m-auto text-xs' />
        </ShareItemLayout>
      </FacebookShareButton>
    </>
  )
}

const ShareToTwitter: React.FC<ShareModuleProps> = ({ _dataState, index }) => {
  return (
    <>
      <TwitterShareButton
        url={_dataState.url}
        title={_dataState.title}
        hashtags={['theiceji']}
      >
        <ShareItemLayout title='Twitter' index={index}>
          <FaXTwitter className='m-auto text-xs' />
        </ShareItemLayout>
      </TwitterShareButton>
    </>
  )
}

const ShareToPinterest: React.FC<ShareModuleProps> = ({
  _dataState,
  index,
}) => {
  return (
    <>
      <PinterestShareButton
        url={_dataState.url}
        media={_dataState.img}
        description={_dataState.title}
      >
        <ShareItemLayout title='Pinterest' index={index}>
          <FaPinterestP className='m-auto text-xs' />
        </ShareItemLayout>
      </PinterestShareButton>
    </>
  )
}

const ShareToLine: React.FC<ShareModuleProps> = ({ _dataState, index }) => {
  return (
    <>
      <LineShareButton url={_dataState.url} title={_dataState.title}>
        <ShareItemLayout title='Line' index={index}>
          <FaLine className='m-auto text-xs' />
        </ShareItemLayout>
      </LineShareButton>
    </>
  )
}

const ShareToWeibo: React.FC<ShareModuleProps> = ({ _dataState, index }) => {
  return (
    <>
      <WeiboShareButton
        url={_dataState.url}
        title={_dataState.title}
        image={_dataState.img}
      >
        <ShareItemLayout title='Weibo' index={index}>
          <FaWeibo className='m-auto text-xs' />
        </ShareItemLayout>
      </WeiboShareButton>
    </>
  )
}

export const CopyToClipboard: React.FC<ShareModuleProps> = ({
  _dataState,
  index,
}) => {
  return (
    <>
      <div
        onClick={() => navigator.clipboard.writeText(_dataState.url)}
        title={_dataState.title}
      >
        <ShareItemLayout title='Copy' index={index}>
          <FaRegClipboard className='m-auto text-xs' />
        </ShareItemLayout>
      </div>
    </>
  )
}

interface ShareItemProps extends ShareModuleProps {
  socialName: string
}

export const ShareItem: React.FC<ShareItemProps> = ({
  _dataState,
  socialName,
  index,
}) => {
  switch (socialName) {
    case DynamicNavShareSocial.facebook:
      return <ShareToFacebook _dataState={_dataState} index={index} />
    case DynamicNavShareSocial.twitter:
      return <ShareToTwitter _dataState={_dataState} index={index} />
    case DynamicNavShareSocial.pinterest:
      return <ShareToPinterest _dataState={_dataState} index={index} />
    case DynamicNavShareSocial.line:
      return <ShareToLine _dataState={_dataState} index={index} />
    case DynamicNavShareSocial.weibo:
      return <ShareToWeibo _dataState={_dataState} index={index} />
    default:
      return null
  }
}
