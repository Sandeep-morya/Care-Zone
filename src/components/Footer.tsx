import { FaPhone } from "react-icons/fa6";
import Contacts from "./footer/Contacts";
import QuickLinks from "./footer/QuickLinks";
import WorkHours from "./footer/WorkHours";
import Button from "./ui/Button";
import BusinessHours from "./footer/BusinessHours";
import full_logo from "../assets/full-logo-filled.png"
const Footer = () => {
	return (
		<footer id="contact-us" className="pb-8 bg-secondary lg:p-12 2xl:px-48">
			<div className="p-4 lg:pt-0 lg:flex lg:justify-between">
				<div>
					<div className="w-full">
						<img
							className="w-[120px] aspect-square my-6 rounded-lg"
							src={full_logo}
							alt="care-zone-logo"
						/>
					</div>
					{/* <p className="mt-2 text-lightwhite">
						Lorem ipsum dolor adipiscing elit, sed do eiusmod
					</p> */}
					<Contacts />
				</div>
				<div className="lg:flex lg:gap-20">
					<BusinessHours />
					<QuickLinks />
					<div>
						<WorkHours />
						<a href="tel:9336622773" className="py-8">
							<Button primary icon={<FaPhone />}>
								Call Us Today
							</Button>
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-1 text-sm border-t text-white/20 border-white/20">
				<p className="mt-6">
					{"CARE ZONE - (Home Nursing Services)"}
				</p>
				<p>Copyright ©carezone {new Date().getFullYear()}. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
