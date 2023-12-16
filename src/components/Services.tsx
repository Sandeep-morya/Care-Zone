import Button from "./ui/Button";
import { FaStethoscope } from "react-icons/fa";
import { servicesData, servicesData2 } from "./data";
import Card from "./services/Card";
import ServiceCard from "./services/ServiceCard";

const Services = () => {
	return (
		<section id="services" className="px-8 py-16 lg:px-12 xl:px-24">
			<div className="flex flex-col justify-between gap-4 lg:grid lg:grid-cols-[1fr,2fr,1fr] lg:gap-8 xl:gap-12">
				<div>
					<h2 className="text-lg font-semibold text-primary">Our Services</h2>
					<h3 className="text-2xl font-bold text-third">
						What Service We Provide
					</h3>
				</div>
				<div className="text-third/50">
					<p>
						Explore CareZone's comprehensive healthcare services, addressing a variety of needs, tailored to prioritize your well-being and ensure personalized care excellence.
					</p>
				</div>
				<div className="mt-4">
					<Button icon={<FaStethoscope />} primary two>
						All Services
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-4 mt-10 lg:gap-8 lg:flex-row">
				{servicesData.map((e) => (
					<ServiceCard key={e.title} {...e} />
				))}
			</div>

			<div className="grid w-full grid-cols-2 p-4 border lg:grid-cols-4 bg-third rounded-xl">
				{servicesData2.map((e) => (
					<Card key={e.title} {...e} />
				))}
			</div>
		</section>
	);
};

export default Services;
