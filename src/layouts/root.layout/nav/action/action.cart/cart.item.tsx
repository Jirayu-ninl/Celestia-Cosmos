import type { Cart as CartType } from '@types'
import Image from 'next/image'

export const CartItem = (item: CartType) => {
  return (
    <>
      <div className='Anim flex h-20 min-w-64 cursor-pointer rounded-md bg-foreground/5 p-2 hover:bg-foreground/10'>
        <div className='relative h-16 min-w-16 overflow-hidden rounded-md'>
          {item.image ? (
            <Image
              src={item.image}
              alt={`cart_${item.name}`}
              fill
              objectFit='cover'
            />
          ) : (
            <div className='absolute h-full w-full bg-foreground/30' />
          )}
        </div>
        <div className='pl-2 pointer-events-none'>
          <p className='font-bold'>
            {item.name.length > 38 ? item.name.slice(0, 38) + '...' : item.name}
          </p>
          <div className='mt-1 flex items-center justify-end font-light opacity-80'>
            <p className='mr-2 text-base'>${item.price}</p>
            <p className='rounded-md bg-background px-2 py-0.5'>
              Quality: {item.quantity}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
