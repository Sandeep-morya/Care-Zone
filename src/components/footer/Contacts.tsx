
import { FaLocationDot, FaMessage, FaPhoneVolume } from "react-icons/fa6";

const Contacts = () => {
  return (
      <div className="flex flex-col gap-2 my-4">
          <div className="flex items-center gap-4">
              <div className="text-primary"><FaLocationDot /></div>
              <p className="text-white/80">Lower Ground Floor, Shop No 2, Lodhi Plaza, Gate no 6 <br />Behind Medanta Hospital, Golf City Lucknow, 226001.</p>
          </div>
          <div className="flex items-center gap-4">
              <div className="text-primary"><FaMessage /></div>
              <p className="text-white/80">carezonehomenursing@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
              <div className="text-primary"><FaPhoneVolume /></div>
              <p className="text-white/80">{"+91 9336622773"}
                 <br/> +91 9984713288</p>
          </div>
      </div>
  )
}

export default Contacts