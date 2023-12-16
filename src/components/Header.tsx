import Logo from "./ui/Logo";
import Button from "./ui/Button";
import ContactData from "./ui/ContactData";
import { FaRegHospital, FaAddressBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = ({ target }: { target: (node?: Element | null | undefined) => void }) => {
	return (
		<header className="flex justify-between px-4 py-6 border-b lg:px-0 lg:mx-12 xl:mx-28">
			<div ref={target} className="m-auto lg:m-0">
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<div className="flex items-center gap-12 mr-20">
					<ContactData
						icon={<FaRegHospital />}
						title={"Lower Ground Floor, Shop No 2"}
						value={"Golf City Lucknow - 226001"}
					/>
					<ContactData
						icon={<FaPhoneVolume />}
						title={"Phone Number"}
						value={"+91 9336622773"}
						value2="+91 9984713288"
					/>
				</div>
				<div className="m-auto">
					<Button icon={<FaAddressBook />}>Make Appointment</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
