import Button from "./ui/Button";
import { FaUserDoctor } from "react-icons/fa6";
import LogoVertical from "./logos/LogoVertical";

const Header = () => {
	return (
		<header className="flex justify-between px-4 py-6 border-b lg:px-12 xl:px-24 2xl:px-48">
			<div className="flex-1">
				<div className="w-[80%] m-auto">
					<LogoVertical className="w-[200px] mt-3 -ml-8 md:-ml-0 " />
				</div>
			</div>

			<a href="#contact-us" className="m-auto">
				<Button icon={<FaUserDoctor />}>New Admit</Button>
			</a>
		</header>
	);
};

export default Header;
