import { useState } from 'react'
import clsx from 'clsx'
import { css } from '@emotion/css'
import { useShallow } from 'zustand/react/shallow'
import { useUiState, NAV, INTERFACE } from '@/store'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const CSS = css`
  & > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem /* 8px */ * var(--tw-space-y-reverse));
  }
`

type Option = {
  graphics: 'performance' | 'balance' | 'low'
}

export const Settings = () => {
  const [_interface, _setInterface, _dark, _setDark, _nav, _setNav] =
    useUiState(
      useShallow((st) => [
        st.interface,
        st.setInterface,
        st.dark,
        st.setDark,
        st.nav,
        st.setNav,
      ]),
    )

  const [option, setOption] = useState<Option>({
    graphics: 'performance',
  })

  return (
    <>
      <ul className={clsx(CSS, 'text-sm')}>
        <li>
          <p>Interface</p>
          <div className='ml-4'>
            <Select onValueChange={(v: INTERFACE) => _setInterface(v)}>
              <SelectTrigger className='h-8 w-[140px]'>
                <SelectValue placeholder={_interface} />
              </SelectTrigger>
              <SelectContent className='z-90'>
                <SelectItem value={INTERFACE.EXPERIENCE}>Experience</SelectItem>
                <SelectItem value={INTERFACE.SIMPLE}>Simple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </li>
        <li>
          <p>Theme</p>
          <div className='ml-4'>
            <Select
              onValueChange={(v: 'true' | 'false') => _setDark(v === 'true')}
            >
              <SelectTrigger className='h-8 w-[140px]'>
                <SelectValue placeholder={_dark ? 'dark' : 'light'} />
              </SelectTrigger>
              <SelectContent className='z-90'>
                <SelectItem value='true'>Dark</SelectItem>
                <SelectItem value='false'>Light</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </li>
        <li>
          <p>Graphics</p>
          <div className='ml-4'>
            <Select
              onValueChange={(v: 'performance' | 'balance' | 'low') =>
                setOption((s: Option) => ({ ...s, graphics: v }))
              }
            >
              <SelectTrigger className='h-8 w-[140px]'>
                <SelectValue placeholder={option.graphics} />
              </SelectTrigger>
              <SelectContent className='z-90'>
                <SelectItem value='performance'>Performance</SelectItem>
                <SelectItem value='balance'>Balance</SelectItem>
                <SelectItem value='low'>Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </li>
      </ul>
      {/* <h6 className='my-2 font-bold'>Navbar</h6>
      <ul className={CSS}>
        <li>
          <p>Placement</p>
          <div className='ml-4'>
            <Select onValueChange={(v: NAV) => _setNav(v)}>
              <SelectTrigger className='h-8 w-[140px]'>
                <SelectValue placeholder={_nav} />
              </SelectTrigger>
              <SelectContent className='z-90'>
                <SelectItem value={NAV.BOTTOM}>Bottom</SelectItem>
                <SelectItem value={NAV.TOP}>Top</SelectItem>
                <SelectItem value={NAV.LEFT}>Left</SelectItem>
                <SelectItem value={NAV.RIGHT}>Right</SelectItem>
                <SelectItem value={NAV.DRAGGABLE}>Draggable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </li>
      </ul> */}
    </>
  )
}
