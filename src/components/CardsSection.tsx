import { SlBadge } from "react-icons/sl";
import { FaUserNurse, FaHandHoldingDollar } from "react-icons/fa6";
const data = [
	{
		icon: <SlBadge />,
		heading: "Satisfaction Guarantee",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
	},
	{
		icon: <FaUserNurse />,
		heading: "Professional Nurse",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
	},
	{
		icon: <FaHandHoldingDollar />,
		heading: "Low Cost Service",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
	},
];
type CardProps = (typeof data)[0];
const Card = ({ icon, heading, description }: CardProps) => {
	return (
		<article className="flex flex-col items-center justify-center gap-4 px-10 py-14 ">
			<div className="text-5xl transition duration-300 text-primary hover:-translate-y-4">{icon}</div>
			<h2 className="text-xl font-semibold text-white">{heading}</h2>
			<p className="text-center text-white/50">{description}</p>
		</article>
	);
};

const CardsSection = () => {
	return (
		<section className="flex flex-col gap-4 bg-third lg:flex-row lg:px-4 lg:py-8" >
			{data.map((e) => (
				<Card key={e.heading} {...e} />
			))}
		</section>
	);
};

export default CardsSection;
