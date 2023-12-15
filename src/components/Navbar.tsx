import { useState } from "react";
import { FaBars, FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import DrawerContent from "./common/DrawerContent";
import Drawer from "./common/Drawer";

const Navbar = () => {
	const [isOpen,setIsOpen]  = useState(false);
	const toggleDrawer = () => setIsOpen(prev => !prev)
	return (
		<nav className="flex items-center justify-between w-full h-16 p-4 lg:px-12 xl:px-28">
			<div onClick={toggleDrawer} className="block text-xl lg:hidden text-primary">
				<FaBars />
			</div>
			<nav className="hidden lg:flex ">
				<ul className="flex gap-8 text-sm font-semibold">
					<li className="text-primary hover:bg-black/5">Home</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary ">
						Services
					</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
						Contact us
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-4">
				<p className="font-semibold text-secondary">Follow Us:</p>
				<ul className="flex items-center gap-4 text-xl text-primary">
					<li>
						<FaFacebookSquare />
					</li>
					<li>
						<FaWhatsapp />
					</li>
					<li>
						<FaInstagram />
					</li>
				</ul>
			</div>
			{isOpen && (
				<Drawer
					content={<DrawerContent />}
					toggleDrawer={toggleDrawer}
				/>
			)}
		</nav>
	);
};

export default Navbar;
