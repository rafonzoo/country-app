import { FC, ReactNode } from 'react'

const DisplayText: FC<{ as?: React.ElementType; children?: ReactNode }> = ({
  as: DynamicTag = 'p',
  children,
}) => {
  return (
    <DynamicTag className='text-[48px] font-bold leading-[57.28px] text-primary'>
      {children}
    </DynamicTag>
  )
}

export default DisplayText
