import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface Props{
    large?:boolean
}
const SocailIcons = ({large}:Props) => {
	return (
        <ul className={twMerge("flex items-center gap-4 text-xl text-primary",large&& "text-2xl gap-8")}>
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
	);
};

export default SocailIcons;
