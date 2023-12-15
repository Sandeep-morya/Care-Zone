﻿
import FooterHeading from './FooterHeading'
import { FaClock } from "react-icons/fa6";
const WorkHours = () => {
  return (
      <div className="text-white/80 mt-8">
          <FooterHeading title="Work hours" />
        <div className='flex items-center gap-4'>
            <div className='text-primary'><FaClock/></div>
              <p>
                  9 AM - 5 PM , Monday - Saturday</p>
        </div>
      </div>
  )
}

export default WorkHours