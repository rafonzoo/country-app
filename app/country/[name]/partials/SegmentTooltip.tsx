import { CallingCodes, Currencies } from '@/helpers/type'
import { FC } from 'react'
import DisplayText from '@/components/DisplayText'
import HoverTooltip from '@/components/HoverTooltip'

const SegmentTooltip: FC<{
  callingCode: string
  currency: string
  callingCodes: CallingCodes
  currencies: Currencies
}> = ({ callingCode, currency, callingCodes, currencies }) => {
  return (
    <div className='mt-10 grid grid-rows-2 gap-[25px] md:grid-cols-2 md:grid-rows-1'>
      <div className='flex w-full flex-col'>
        <p className='mb-[5px] text-[18px] font-medium leading-[21.48px]'>
          Calling Code
        </p>
        <DisplayText>{callingCode}</DisplayText>
        <p className='mt-[11px] flex space-x-1 text-sm font-medium leading-[16.71px]'>
          <HoverTooltip items={callingCodes.map(({ name }) => name)} />
          <span className='block'>with this calling code</span>
        </p>
      </div>
      <div className='flex w-full flex-col'>
        <p className='mb-[5px] text-[18px] font-medium leading-[21.48px]'>
          Currency
        </p>
        <DisplayText>{currency}</DisplayText>
        <p className='mt-[11px] flex space-x-1 text-sm font-medium leading-[16.71px]'>
          <HoverTooltip items={currencies.map(({ name }) => name)} />
          <span className='block'>with this currency</span>
        </p>
      </div>
    </div>
  )
}

export default SegmentTooltip
