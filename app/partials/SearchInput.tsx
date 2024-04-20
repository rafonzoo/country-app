'use client'

import { useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import SearchSuggestions from '@/app/partials/SearchSuggestions'

const SearchInput = () => {
  const [queryCountry, setQueryCountry] = useState('')

  return (
    <div className='mx-auto mt-[43px] flex w-[87.5%] max-w-[700px] flex-col text-center'>
      <div className='relative mb-3 w-full'>
        <input
          className='focus:shadow-focus peer flex h-[60px] w-full items-center rounded-lg border border-[color:#C8C8C8] pl-[28px] pr-[19px] text-[18px] font-medium leading-[21.48px] outline-none placeholder-shown:text-[color:#C8C8C8] focus:border-[color:rgba(131,_98,_242,_0.5)]'
          type='text'
          name='countryName'
          value={queryCountry}
          autoComplete='off'
          autoFocus
          placeholder='Type any country name'
          onChange={(e) => setQueryCountry(e.target.value)}
        />
        <span className='absolute right-[19px] top-1/2 -translate-y-1/2 text-[30px] text-[color:#C8C8C8] peer-focus:text-primary'>
          <MdOutlineSearch />
        </span>
      </div>
      <SearchSuggestions query={queryCountry} />
    </div>
  )
}

export default SearchInput
