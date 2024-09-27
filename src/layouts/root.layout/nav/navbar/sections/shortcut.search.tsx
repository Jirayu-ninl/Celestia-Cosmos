import { Search as Icon } from '@nexel/cosmos/assets/icons'

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <>
      <div className='Anim relative -mb-1 flex h-full w-full rounded-md bg-foreground/10 hover:bg-foreground/30 [&:hover>p]:opacity-100'>
        <p className='Anim my-auto pl-2 opacity-40'>Search..</p>
        <div className='absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2'>
          <Icon />
        </div>
      </div>
    </>
  )
}
