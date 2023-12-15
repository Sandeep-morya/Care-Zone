import FooterHeading from "./FooterHeading";

const QuickLinks = () => {
	return (
		<div className="text-white/80 mt-8">
			<FooterHeading title="Quick Links" />
			<ul className="flex flex-col gap-2">
				<li className="hover:text-primary transition">Home</li>
				<li className="hover:text-primary transition">Our Service</li>
				<li className="hover:text-primary transition">Contact Us</li>
			</ul>
		</div>
	);
};

export default QuickLinks;
