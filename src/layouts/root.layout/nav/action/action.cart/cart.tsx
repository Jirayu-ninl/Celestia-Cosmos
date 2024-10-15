import Link from 'next/link'
import { useUserState } from '@/store'
// import { useShallow } from 'zustand/shallow'
import { Icon } from '@nexel/cosmos/assets'
import { CartItem } from './cart.item'

export const Cart = () => {
  const _cart = useUserState((st) => st.cart)

  return (
    <>
      {_cart.length === 0 ? (
        <div className='flex flex-col items-center pb-6 pt-4 text-center text-sm'>
          <p>
            Wanna pick <br /> your first item?
          </p>
          <Link href='/shop' className='opacity-60 hover:opacity-100'>
            go to shop
          </Link>
        </div>
      ) : (
        <>
          <div className='absolute right-4 top-4 flex cursor-pointer items-center space-x-1 rounded-md fill-foreground'>
            <div className='Anim flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 hover:bg-primary hover:fill-black'>
              <div className='h-4 w-4'>
                <Icon.Edit />
              </div>
            </div>
            <div className='Anim flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 hover:bg-primary hover:fill-black'>
              <div className='h-4 w-4'>
                <Icon.Bag />
              </div>
            </div>
          </div>
          <div className='h-[16rem] overflow-scroll'>
            <div className='space-y-2 text-sm'>
              {_cart.map((items) => (
                <CartItem {...items} key={items.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
