import { PropsWithChildren } from 'react'
import { FaAngleRight } from "react-icons/fa"
const Li = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='text-primary'>
        <FaAngleRight />
      </div>
      <div className='text-text font-medium'>{children}</div>
    </div>
  )
}

export default Li