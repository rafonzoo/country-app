import { Country } from '@/helpers/type'
import { FC } from 'react'

const SegmentHeader: FC<{ country: Country }> = ({ country }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center'>
        <h1 className='mb-[-12px] mr-[10px] text-[45px] font-bold leading-[57.28px] md:mb-[-8px] md:text-5xl'>
          {country.name.common}
        </h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={country.flags.svg}
          alt={`${country.name.common}'s flag`}
          className='mt-[10px] h-[30px] shadow-[0px_0px_1px_0px_rgb(0_0_0_/_25%)]'
        />
      </div>
      <ul className='mt-[10px] flex space-x-[5px] overflow-x-auto overflow-y-hidden'>
        {country.altSpellings.map((spelling, index) => (
          <li
            key={index}
            className='inline-flex items-center justify-center rounded-full bg-secondary px-[15px] pb-[6px] pt-[5px] text-xs font-bold leading-[14px] tracking-wide text-white'
          >
            <span className='truncate'>{spelling}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SegmentHeader
