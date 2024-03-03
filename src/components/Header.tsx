import Logo from "./ui/Logo";
import Button from "./ui/Button";
import ContactData from "./ui/ContactData";
import { FaRegHospital, FaCalendarAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = ({
	target,
}: {
	target: (node?: Element | null | undefined) => void;
}) => {
	return (
		<header className="flex justify-between px-4 py-6 border-b lg:px-12 xl:px-12 2xl:px-24">
			<div ref={target} className="m-auto lg:m-0">
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<div className="flex items-center gap-12 mr-20">
					<ContactData
						icon={<FaRegHospital />}
						title={"INFRONT OF MEDANTA HOSPITAL GATE NO.5"}
						value={"NEAR VEERE DA DHABA,GOLF CITY LUCKNOW 226002"}
					/>
					<ContactData
						icon={
							<a href="tel:8887166889">
								<FaPhoneVolume />
							</a>
						}
						title={"Phone Number"}
						value={"+91 8887166889"}
						value2="+91 9336622773"
					/>
				</div>
				<a href="#contact-us" className="m-auto">
					<Button icon={<FaCalendarAlt />}>Make Appointment</Button>
				</a>
			</div>
		</header>
	);
};

export default Header;
