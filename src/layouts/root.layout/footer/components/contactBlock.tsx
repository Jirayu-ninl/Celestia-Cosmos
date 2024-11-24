// import { useShallow } from 'zustand/shallow'
import { useUiState, CURSOR } from '@/store'
import { contacts } from '@config'
import { getContactObject } from '@/utils/view'
import SocialLinkIcon from './socialLinkIcon'

const CreditBlock = () => {
  const _setCursor = useUiState((st) => st.setCursor)

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
      className='flex items-center space-x-4 md:space-x-7'
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
        <SocialLinkIcon name={v.name} href={v.href} index={i} key={v.name} />
      ))}
    </div>
  )
}

export default CreditBlock
