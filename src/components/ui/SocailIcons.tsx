import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
// import { twMerge } from "tailwind-merge";
import useVisit from "../../hooks/useVisit";

const SocailIcons = () => {
	const visit = useVisit();
	return (
		<ul
			className="flex items-center gap-4 text-2xl text-primary">
			<li className="transition hover:text-third"
				onClick={visit.bind(
					this,
					"https://api.whatsapp.com/send?phone=919336622773",
				)}>
				<FaWhatsapp />
			</li>
			<li
				className="transition hover:text-third"
				onClick={visit.bind(
					this,
					"https://www.instagram.com/carezonehomenursing/",
				)}>
				<FaInstagram />
			</li>
			<li
				className="transition hover:text-third"
				onClick={visit.bind(
					this,
					"https://www.facebook.com/profile.php?id=61554891712057",
				)}>
				<FaFacebook />
			</li>

			{/* <li
				className="text-2xl transition hover:text-third"
				onClick={visit.bind(this, "mailto:nursing@carezonelko.com")}>
				<MdOutlineEmail />
			</li> */}
		</ul>
	);
};

export default SocailIcons;
