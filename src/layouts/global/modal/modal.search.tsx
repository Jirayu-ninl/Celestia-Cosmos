import type { RefObject } from 'react'
import { useState } from 'react'

export const SearchModal = ({
  $ref,
  // _onClearModal,
}: {
  $ref: RefObject<any>
  // _onClearModal: () => void
}) => {
  const [searchInput, setSearchInput] = useState('')
  return (
    <div className='w-[350px] xl:w-[650px]' ref={$ref}>
      <input
        className='w-full rounded-xl bg-background/80 px-4 py-2 text-2xl xl:text-4xl'
        type='text'
        placeholder='Search..'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className='mt-4 h-[250px] w-full rounded-xl bg-background/40'></div>
    </div>
  )
}
