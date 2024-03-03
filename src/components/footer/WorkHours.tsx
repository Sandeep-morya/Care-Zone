import { MdEmail } from "react-icons/md";
import FooterHeading from "./FooterHeading";
import { FaClock } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
const WorkHours = () => {
	return (
		<div className="my-8 text-white/80">
			<FooterHeading title="Contacts" />
			<div className="flex items-center gap-8">
				<div className="text-primary">
					<FaClock />
				</div>
				<p>24/7 Availability</p>
			</div>
			<div className="flex items-center gap-4">
				<div className="text-primary">
					<MdEmail />
				</div>
				<p>nursing@carezonelko.com</p>
			</div>
			<div className="flex items-center gap-4">
				<div className="text-primary">
					<FaPhoneVolume />
				</div>
				<p>+91 8887166889</p>
			</div>
			<div className="flex items-center gap-4">
				<div className="text-primary">
					<FaPhoneVolume />
				</div>
				<p>+91 9336622773</p>
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
	);
};

export default WorkHours;
