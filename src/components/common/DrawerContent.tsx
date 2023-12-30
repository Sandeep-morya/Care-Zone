import { FaPhoneVolume, FaRegHospital } from "react-icons/fa";
import ContactData from "../ui/ContactData";

const DrawerContent = ({ toggle }: { toggle: () => void }) => {
	return (
		<nav>
			<ul className="flex flex-col text-sm font-semibold">
				<li onClick={toggle} className="p-3 text-primary hover:bg-black/5">
					<a href="#">Home</a>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary ">
					<a href="#services">Services</a>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#about-us">About us</a>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#contact-us">Contact us</a>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#appointment">Appointment</a>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="tel:9336622773">Call us</a>
				</li>

			</ul>
			<div className="flex flex-col gap-4 pl-2 mt-32">
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
		</nav>
	);
};

export default DrawerContent;
