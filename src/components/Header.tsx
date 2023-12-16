import Logo from "./ui/Logo";
import Button from "./ui/Button";
import ContactData from "./ui/ContactData";
import { FaRegHospital, FaAddressBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
const Header = () => {
	return (
		<header className="flex justify-between px-4 py-6 border-b lg:px-0 lg:mx-12 xl:mx-28">
			<div className="m-auto lg:m-0">
				<Logo />
			</div>
			<div className="hidden lg:flex">
				<div className="flex items-center gap-12 mr-20">
					<ContactData
						icon={<FaRegHospital />}
						title={"Jl. Sunset Road"}
						value={"Kuta, Bali - 80361"}
					/>
					<ContactData
						icon={<FaPhoneVolume />}
						title={"Phone Number"}
						value={"(+62)81 548 5612"}
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
