import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa6'

export default function SocialLinkIcon({
  name,
  href,
  index,
}: {
  name: string
  href: string
  index: number
}) {
  return (
    <motion.div
    // initial={aFooterSocialIcon.initial}
    // animate={aFooterSocialIcon.animate}
    // transition={aFooterSocialIcon.transition(index === 0 ? 0 : index / 10)}
    >
      <Link href={href} className='Anim opacity-40 hover:opacity-100'>
        {SocialIconGenerator(name)}
      </Link>
    </motion.div>
  )
}

const SocialIconGenerator = (name: string) => {
  if (name === 'facebook') {
    return <FaFacebookF />
  } else if (name === 'instagram') {
    return <FaInstagram />
  } else if (name === 'youtube') {
    return <FaYoutube />
  } else if (name === 'mail') {
    return <FaEnvelope />
  } else {
    return <></>
  }
}
