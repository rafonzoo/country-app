'use client'

import { getQueriedCountries } from '@/helpers/api'
import { useDebounce } from '@/helpers/hook'
import { Countries } from '@/helpers/type'
import { FC, useState, useEffect, memo } from 'react'
import { useMutation } from 'react-query'
import Link from 'next/link'
import slugify from 'slugify'

const SearchSuggestions: FC<{ query: string }> = ({ query = '' }) => {
  const [countries, setCountries] = useState<Countries>([])
  const debouncedQuery = useDebounce(query)
  const isTyping = debouncedQuery !== query
  const isIdleTyping = !query || isTyping
  const { mutate, isLoading, isError, error } = useMutation<
    Countries,
    unknown,
    string
  >({
    mutationFn: (payload) => getQueriedCountries(payload),
    onSuccess: (data) => setCountries(data),
    onError: () => setCountries([]),
  })

  useEffect(() => {
    // Only fetch if user stop typing. Otherwise it will burn it
    if (debouncedQuery) {
      mutate(debouncedQuery)
    }
  }, [debouncedQuery, mutate])

  useEffect(() => {
    // Reset any previous value while typing a new one
    if (countries.length && isTyping) {
      setCountries([])
    }
  }, [countries.length, isTyping])

  if (isIdleTyping || isLoading || (!countries.length && !isError)) {
    return null
  }

  return (
    <div className='relative w-full'>
      <div className='shadow-opaque absolute left-0 top-0 w-full rounded-[5px]'>
        <ul className='py-[16px] text-left text-[18px] font-medium leading-[21.48px]'>
          {isError ? (
            <li>
              <p className='px-[25px] py-1 text-[color:#FF0000]'>
                {(error as Error).message}
              </p>
            </li>
          ) : (
            countries.map(({ name }, index) => (
              <li key={index}>
                <Link
                  href={`/country/${slugify(name.common).toLowerCase()}`}
                  className='block w-full px-[25px] py-[9px] text-left hover:bg-zinc-100'
                >
                  {name.common}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default memo(SearchSuggestions)
