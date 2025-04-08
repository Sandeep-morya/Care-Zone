
import { FaLocationDot } from "react-icons/fa6";
import FooterHeading from "./FooterHeading";


const Contacts = () => {
    return (
        <div className="flex flex-col gap-2 my-4 text-white">
            <FooterHeading title="Office Address" />
            <div className="flex items-center gap-4">
                <div className="text-xl text-primary"><FaLocationDot /></div>
                <p className="text-white/80">C3/23, Vikas Khand, Gomti Nagar,
                    <br /> Lucknow, Uttar Pradesh 226010</p>
            </div>
            {/* <div className="flex items-center gap-4">
                <div className="text-2xl text-primary"><MdEmail /></div>
                <p className="text-white/80">nursing@carezonelko.com</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-xl text-primary"><FaPhoneVolume /></div>
                <p className="text-white/80">{"+91 9336622773"}
                    <br /> +91 9336622773</p>
            </div> */}
        </div>
    )
}

export default Contacts