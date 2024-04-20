'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

const BackToHome: FC = () => {
  const router = useRouter()

  return (
    <button
      className='bg-primary flex rounded-[10px] px-[15px] py-[13px] text-[18px] font-medium leading-[21.48px] text-white'
      onClick={() => router.push('/')}
    >
      <span className='mr-[10px] block'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          width={24}
          height={24}
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m11 5-7 7 7 7M4 12h16'
          />
        </svg>
      </span>
      Back to Homepage
    </button>
  )
}

export default BackToHome
