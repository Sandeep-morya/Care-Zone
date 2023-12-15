import Logo from "./ui/Logo";
import Button from "./ui/Button";
import ContactData from "./ui/ContactData";
import { FaRegHospital, FaAddressBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
const Header = () => {
	return (
		<header className="px-4 py-6 flex justify-between border-b xl:px-0 xl:mx-28">
			<div className="m-auto xl:m-0">
				<Logo />
			</div>
			<div className="hidden xl:flex">
				<div className="flex items-center mr-20 gap-12">
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
					<Button icon={<FaAddressBook />}>Contact Us</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
