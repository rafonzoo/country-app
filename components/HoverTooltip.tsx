import { FC } from 'react'

const HoverTooltip: FC<{ items: string[] }> = ({ items }) => {
  return (
    <span className='group relative cursor-pointer'>
      <span className='text-primary block cursor-pointer underline'>
        {items.length} country
      </span>
      <span className='absolute top-0 hidden text-sm font-medium leading-[16.71px] text-white no-underline group-hover:block'>
        <span className='mt-[41.7px] flex max-h-[300px] cursor-auto flex-col space-y-[10px] overflow-y-auto overflow-x-hidden rounded-[10px] bg-[color:#525252] p-5'>
          {items.map((item, index) => (
            <span key={index} className='block min-w-[200px]'>
              {item}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

export default HoverTooltip
