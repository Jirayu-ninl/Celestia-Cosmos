'use client'

import { useShallow } from 'zustand/shallow'
import { useUiState, CURSOR } from '@/store'
import { contacts } from '@config'
import { getContactObject } from '@/utils/contacts'
import { SocialLinkIcon } from './footer.social.icon'

const ContactBlock = () => {
  const _setCursor = useUiState(useShallow((state) => state.setCursor))

  const Contact = getContactObject(contacts)
  const contactList = [
    Contact.facebook,
    Contact.instagram,
    Contact.youtube,
    Contact.mail,
    Contact.discord,
  ]
  return (
    <div
      className='flex flex-col items-center space-x-0 space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0'
      onMouseEnter={() => {
        _setCursor(CURSOR.LOGO)
      }}
      onMouseLeave={() => {
        _setCursor(undefined)
      }}
      onClick={() => {
        _setCursor(undefined)
      }}
    >
      {contactList.map((v, i) => (
        <SocialLinkIcon name={v.name} href={v.href} index={i} key={i} />
      ))}
    </div>
  )
}

export { ContactBlock }
