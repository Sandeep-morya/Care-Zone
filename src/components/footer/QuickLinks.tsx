import FooterHeading from "./FooterHeading";

const QuickLinks = () => {
	return (
		<div className="mt-8 text-white/80">
			<FooterHeading title="Quick Links" />
			<ul className="flex flex-col text-sm font-semibold">
				<li className="py-2 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#">Home</a>
				</li>
				<li className="py-2 hover:bg-black/5 active:text-primary hover:text-primary ">
					<a href="#services">Services</a>
				</li>
				<li className="py-2 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#about-us">About us</a>
				</li>
				<li className="py-2 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#contact-us">Contact us</a>
				</li>
				<li className="py-2 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#appointment">Appointment</a>
				</li>
				</ul>
		</div>
	);
};

export default QuickLinks;
