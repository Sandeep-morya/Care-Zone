
import { FaLocationDot, FaMessage, FaPhoneVolume } from "react-icons/fa6";

const Contacts = () => {
  return (
      <div className="flex flex-col gap-2 my-4">
          <div className="flex items-center gap-4">
              <div className="text-primary"><FaLocationDot /></div>
              <p className="text-white/80">Jl. Sunset Road No.815, Kuta</p>
          </div>
          <div className="flex items-center gap-4">
              <div className="text-primary"><FaMessage /></div>
              <p className="text-white/80">xyz@emial.com</p>
          </div>
          <div className="flex items-center gap-4">
              <div className="text-primary"><FaPhoneVolume /></div>
              <p className="text-white/80">1234567899</p>
          </div>
      </div>
  )
}

export default Contacts