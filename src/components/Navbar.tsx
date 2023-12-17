import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "./common/Drawer";
import SocailIcons from "./ui/SocailIcons";
import { twMerge } from "tailwind-merge";

const Navbar = ({ inView }: { inView: boolean }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => setIsOpen((prev) => !prev);

	return (
		<nav
			className={twMerge(
				"flex sticky z-20 bg-white top-0 items-center justify-between w-full h-16 p-4 lg:h-[4.5rem] lg:px-12 xl:px-28",
				!inView && "shadow-xl",
			)}>
			<div
				onClick={toggleDrawer}
				className="block text-xl lg:hidden text-primary">
				<FaBars />
			</div>
			<div className="flex-1 lg:hidden ">
				{!inView && (
					<div className="mx-4">
						<img className="h-10 aspect-square" src={"icon.png"} />
					</div>
				)}
			</div>

			<nav className="items-center hidden lg:flex ">
				{!inView && (
					<div className="mr-16">
						<img className="h-[3.5rem] aspect-square" src={"icon.png"} />
					</div>
				)}
				<ul className="flex gap-16 text-sm font-bold">
					<li className="text-primary hover:bg-black/5">
						<a href="#">Home</a>
					</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary ">
						<a href="#services">Services</a>
					</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
						<a href="#about-us">About us</a>
					</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
						<a href="#contact-us">Contact us</a>
					</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
						<a href="#appointment">Appointment</a>
					</li>
					<li className="text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
						<a href="tel:9336622773">Call us</a>
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-4">
				{inView && <p className="font-semibold text-secondary">Follow Us:</p>}
				<SocailIcons />
			</div>
			{isOpen && (
				<Drawer
					toggleDrawer={toggleDrawer}
				/>
			)}
		</nav>
	);
};

export default Navbar;
