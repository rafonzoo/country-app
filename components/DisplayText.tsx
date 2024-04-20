import { FC, ReactNode } from 'react'

const DisplayText: FC<{ as?: React.ElementType; children?: ReactNode }> = ({
  as: DynamicTag = 'p',
  children,
}) => {
  return (
    <DynamicTag className='text-primary text-[48px] font-bold leading-[57.28px]'>
      {children}
    </DynamicTag>
  )
}

export default DisplayText
