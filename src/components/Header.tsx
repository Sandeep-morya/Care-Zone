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
				<div className="flex items-center gap-8 mr-10">
					<ContactData
						icon={<FaRegHospital />}
						title={"Infront of Medanta Hospital, Gate No. 5, Golf City"}
						value={"Lucknow, Uttar Pradesh 226002"}
					/>
					<ContactData
						icon={
							<a href="tel:8887166889">
								<FaPhoneVolume />
							</a>
						}
						title={""}
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
