import Button from "./ui/Button";
import { FaStethoscope, FaHospitalUser } from "react-icons/fa";
import { FaPlus, FaUserDoctor, FaUserNurse } from "react-icons/fa6";
import ButtonLink from "./ui/ButtonLink";

const data = [
	{
		image:
			"https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/nurse-serving-breakfast-to-senior-man-e1638524571723-pgyr3mt1fejm2dmjor557r94ien5mcf2f3ep2id15c.jpg",
		icon: <FaHospitalUser />,
		title: "Home Care",
		description:
			"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt",
		handler: () => {
			console.log("Read more");
		},
	},
	{
		image:
			"https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-in-nursing-home-e1638524580355-pgyr3v9l4wv6yva9bcssc749uvhgjmcng9a2e00hlc.jpg",
		icon: <FaUserNurse />,
		title: "Senior Care",
		description:
			"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt",
		handler: () => {
			console.log("Read more");
		},
	},
	{
		image:
			"https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/caring-for-disabled-person-in-clinic-rehabilitation-center-and-home-e1638524664128-pgyr62812zva243kiaxg5n6zr8oai723r42up8rf2o.jpg",
		icon: <FaUserDoctor />,
		title: "Intensive Care",
		description:
			"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt",
		handler: () => {
			console.log("Read more");
		},
	},
];

type CardProps = (typeof data)[0];

const ServiceCard = ({
	description,
	title,
	icon,
	image,
	handler,
}: CardProps) => {
	return (
		<article className="w-full">
			<div className="w-full aspect-square">
				<img
					className="w-full h-full shadow-xl rounded-xl"
					src={image}
					alt="service"
				/>
			</div>

			<div className="w-[90%] bg-white  transition-all duration-500 hover:bg-primary border h-[240px] rounded-xl shadow-xl -translate-y-1/2 m-auto group">
				<div className="w-[80px] shadow-md group-hover:bg-white flex justify-center text-4xl m-auto -translate-y-1/2 items-center rounded-full text-white aspect-square bg-primary group-hover:text-primary transition-all duration-500">
					{icon}
				</div>
				<div className="flex flex-col items-center gap-4 px-8 text-center -translate-y-4">
					<h2 className="text-xl font-semibold text-third group-hover:text-white">
						{title}
					</h2>
					<p className="text-sm text-third/75 group-hover:text-white/75">
						{description}
					</p>
					<ButtonLink onClick={handler}>Read More</ButtonLink>
				</div>
			</div>
		</article>
	);
};

const data2 = [
	{ icon: <FaHospitalUser />, count: 100, title: "Happy Patients" },
	{ icon: <FaHospitalUser />, count: 100, title: "Successfull Home Care" },
	{ icon: <FaHospitalUser />, count: 100, title: "Years Of Experience" },
	{ icon: <FaHospitalUser />, count: 100, title: "Personal Nurces" },
];

type Props = (typeof data2)[0];

const Card = ({ icon, count, title }: Props) => {
	return (
		<article className="flex flex-col items-center justify-center gap-1 py-6 lg:gap-2 lg:py-12">
			<div className="text-4xl text-primary">{icon}</div>
			<div className="flex items-center gap-2 text-primary">
				<span className="text-3xl font-semibold tracking-wide text-white">{count}</span> <FaPlus />
			</div>
			<p className="text-sm text-white/50">{title}</p>
		</article>
	);
};

const Services = () => {
	return (
		<section id="services" className="px-8 py-16 lg:px-12 xl:px-24">
			<div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8 xl:gap-12">
				<div>
					<h2 className="text-lg font-semibold text-primary">Our Services</h2>
					<h3 className="text-2xl font-bold text-third">
						What Service We Provide
					</h3>
				</div>
				<div className="text-third/50">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua
					</p>
				</div>
				<div className="mt-4">
					<Button icon={<FaStethoscope />} primary two>
						All Services
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-4 mt-10 lg:gap-8 lg:flex-row">
				{data.map((e) => (
					<ServiceCard key={e.title} {...e} />
				))}
			</div>

			<div className="grid w-full grid-cols-2 p-4 border lg:grid-cols-4 bg-third rounded-xl">
				{data2.map((e) => (
					<Card key={e.title} {...e} />
				))}
			</div>
		</section>
	);
};

export default Services;
