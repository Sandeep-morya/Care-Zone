import { SlBadge } from "react-icons/sl";
import { FaUserNurse, FaHandHoldingDollar } from "react-icons/fa6";
const data = [
	{
		icon: <SlBadge />,
		heading: "Satisfaction Guarantee",
		description:
			"At CareZone, we are committed to your well-being and satisfaction. We understand the importance of receiving quality healthcare.",
	},
	{
		icon: <FaUserNurse />,
		heading: "Professional Nurse",
		description:
			"Our professional nurses bring a wealth of knowledge and experience to ensure that you receive the highest standard of care.",
	},
	{
		icon: <FaHandHoldingDollar />,
		heading: "Low Cost Service",
		description:
			"At CareZone, we believe in providing high-quality healthcare services without compromising affordability. ",
	},
];
type CardProps = (typeof data)[0];
const Card = ({ icon, heading, description }: CardProps) => {
	return (
		<article className="flex flex-col items-center justify-center gap-4 px-10 py-14 ">
			<div className="text-5xl transition duration-300 text-primary hover:-translate-y-4">
				{icon}
			</div>
			<h2 className="text-xl font-semibold text-white">{heading}</h2>
			<p className="text-center text-white/50">{description}</p>
		</article>
	);
};

const CardsSection = () => {
	return (
		<section className="grid grid-cols-1 gap-4 bg-third lg:grid-cols-3 lg:px-4 lg:py-8 2xl:px-56">
			{data.map((e) => (
				<Card key={e.heading} {...e} />
			))}
		</section>
	);
};

export default CardsSection;
