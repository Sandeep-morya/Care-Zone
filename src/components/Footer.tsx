import { FaPhone } from "react-icons/fa6";
import Contacts from "./footer/Contacts";
import QuickLinks from "./footer/QuickLinks";
import WorkHours from "./footer/WorkHours";
import Button from "./ui/Button";
import BusinessHours from "./footer/BusinessHours";

const Footer = () => {
	return (
		<footer className="bg-secondary pb-8 lg:p-12">
			<div className="p-4 lg:pt-0 lg:flex lg:justify-between">
				<div>
					<div className="w-full">
						<img
							className="w-[320px] py-6 lg:w-[200px]"
							src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/logo-2-768x225.png"
							alt="care-zone-logo"
						/>
					</div>
					{/* <p className="text-lightwhite mt-2">
						Lorem ipsum dolor adipiscing elit, sed do eiusmod
					</p> */}
					<Contacts />
				</div>
				<div className="lg:flex lg:gap-20">
                    <BusinessHours/>
					<QuickLinks />
					<div>
						<WorkHours />
						<div className="py-8">
							<Button primary icon={<FaPhone />}>
								Call Us Today
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center text-white/20 gap-1 text-sm border-t border-white/20">
				<p className="mt-6">
					{"CARE ZONE - (Home Nursing Services)"}
				</p>
				<p>Copyright ©carezone {new Date().getFullYear() }. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
