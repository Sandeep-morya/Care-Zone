// import React from 'react'
import Progress from "./about/Progress";
import Button from "./ui/Button";
import { FaStethoscope } from "react-icons/fa";

const AboutSection = () => {
	return (
		<section
			id="about-us"
			className="px-8 py-16 flex flex-col lg:flex-row gap-4 lg:gap-12 lg:px-12 xl:px-24">
			{/* <div className="w-full lg:hidden aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
				<img
					className="w-full h-full object-cover"
					src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/male-nurse-helping-senior-woman-with-walking-stick-pgv084s5knxvjh793l301vphth8su6gr3a2obtbchs.jpg"
					alt="helping nurse"
				/>
			</div> */}
			<div className="flex mt-6 lg:mt-0 lg:w-[40%] flex-col gap-4">
				<h2 className="text-lg font-semibold text-primary">
					About{" "}
					<span className="font-extrabold tracking-wider text-xl">
						Care Zone
					</span>
				</h2>
				<h3 className="text-2xl font-bold text-third">
					We’re Take Care of Your Problems Carefully
				</h3>
				<div className="text-third/50">
					<p>
						"We take care of your problems with meticulous attention and utmost
						diligence. Our dedicated team ensures a thoughtful and careful
						approach to address your concerns, providing solutions that
						prioritize your well-being."
					</p>
				</div>
				<div className="w-full flex flex-col">
					<Progress title="Home Care" percent={90} />
					<Progress title="Patient Care" percent={80} />
					<Progress title="Senior Care" percent={60} />
					<Progress title="Baby Care" percent={60} />
					<Progress title="Physiotherapy" percent={50} />
					<Progress title="Blood Test" percent={50} />
				</div>
				<div className="text-third/50">
					<p>
						"At CareZone, your concerns are handled with precision and care. Our
						dedicated team is committed to understanding and resolving your
						problems with the utmost attention to detail, ensuring your peace of
						mind and satisfaction."
					</p>
				</div>
				<div className="mt-4 flex items-center justify-between">
					<Button icon={<FaStethoscope />} primary two>
						All Services
					</Button>
					<div className="text-center">
						<h2 className="font-medium text-lg italic">Satish Maurya</h2>
						<p className="text-primary">Founder</p>
					</div>
				</div>
			</div>
			<div className="flex-1 flex gap-4">
				<div className="flex-1">
					<img
						className="w-full h-full object-cover rounded-xl shadow-xl"
						src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/male-nurse-helping-senior-woman-with-walking-stick-pgv084s5knxvjh793l301vphth8su6gr3a2obtbchs.jpg"
						alt="helping nurse"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-4">
					<img
						className="w-full h-full object-cover rounded-xl shadow-xl"
						src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-posing-in-clinic-pgx1ontlkk2n61u1uivv20t6bn9t8z805xxpccd1qa.jpg"
						alt="nurse"
					/>
					<img
						className="w-full h-full object-cover rounded-xl shadow-xl"
						src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-talking-with-an-old-woman-e1638524560913-pgyr3cgr5ac0qeox03s9a5wi7f38hzhirtci86k3r6.jpg"
						alt="nurse"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
