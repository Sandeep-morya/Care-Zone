import { FaPhone } from "react-icons/fa6";
import Contacts from "./footer/Contacts";
import QuickLinks from "./footer/QuickLinks";
import WorkHours from "./footer/WorkHours";
import Button from "./ui/Button";
import BusinessHours from "./footer/BusinessHours";
import CompleteLogo from "./logos/CompleteLogo";

const Footer = () => {
	return (
		<footer id="contact-us" className="pb-8 bg-secondary lg:p-12 2xl:px-48">
			<div className="p-4 lg:pt-0 lg:flex lg:justify-between">
				<div>
					<div className="w-full">
						<CompleteLogo className="w-32 h-32 p-2 bg-white rounded-md drop-shadow-lg" />
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
			<div className="flex flex-col items-center gap-1 text-sm border-t text-white/50 border-white/20">
				<p className="mt-6">
					{"CARE ZONE - (Home Nursing Services)"}
				</p>
				<p>Copyright ©carezone {new Date().getFullYear()}. All rights reserved.</p>
				<p className="self-center lg:self-end">Crafted by <a href="https://sandeep-morya.vercel.app/" target="_blank">@Sandeep-Maurya</a></p>
			</div>
		</footer >
	);
};

export default Footer;
