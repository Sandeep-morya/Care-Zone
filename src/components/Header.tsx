import Button from "./ui/Button";
import ContactData from "./ui/ContactData";
import { FaRegHospital, FaCalendarAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import LogoVertical from "./logos/LogoVertical";

const Header = ({
	target,
}: {
	target: (node?: Element | null | undefined) => void;
}) => {
	return (
		<header className="flex justify-between px-4 py-6 border-b lg:px-12 xl:px-24 2xl:px-48">
			<div ref={target} className="m-auto lg:m-0">
				<div className="w-[80%] m-auto">
					<LogoVertical className="w-[200px] mt-3 -ml-8 md:-ml-0 " />
				</div>
			</div>
			<div className="hidden lg:flex">
				<div className="flex items-center gap-12 mr-20">
					<ContactData
						icon={<FaRegHospital />}
						title={"Lower Ground Floor, Shop No. 2"}
						value={"Golf City Lucknow - 226002"}
					/>
					<ContactData
						icon={
							<a href="tel:9336622773">
								<FaPhoneVolume />
							</a>
						}
						title={"Phone Number"}
						value={"+91 9336622773"}
						value2="+91 9984713288"
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
