import { Country } from '@/helpers/type'
import { FC } from 'react'

const SegmentHeader: FC<{ country: Country }> = ({ country }) => {
  return (
    <div>
      <div className='flex items-center space-x-[10px]'>
        <h1 className='text-5xl font-bold leading-[57.28px]'>
          {country.name.common}
        </h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={country.flags.svg}
          alt={`${country.name.common}'s flag`}
          className='mt-1 h-[30px] shadow-[0px_0px_1px_0px_rgb(0_0_0_/_25%)]'
        />
      </div>
      <ul className='flex space-x-[5px]'>
        {country.altSpellings.map((spelling, index) => (
          <li
            key={index}
            className='bg-secondary inline-flex items-center justify-center rounded-full px-[15px] pb-[6px] pt-[5px] text-xs font-bold leading-[14px] tracking-wide text-white'
          >
            {spelling}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SegmentHeader
