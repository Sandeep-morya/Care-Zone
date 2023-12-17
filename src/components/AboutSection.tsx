import Progress from "./about/Progress";
import logoname from "../assets/logoname.png";
import aboutFirst from "../assets/web-images/about-first.jpg";
import aboutSecond from "../assets/web-images/about-second.jpg";
import aboutThird from "../assets/web-images/about-third.jpg";

const AboutSection = () => {
	return (
		<section
			id="about-us"
			className="flex flex-col gap-4 px-8 py-20 lg:flex-row lg:gap-12 lg:px-12 xl:px-24">
			<div className="flex mt-6 lg:mt-0 lg:w-[40%] flex-col gap-4">
				<h2 className="text-lg font-semibold text-primary">
					About
					<span className="text-xl font-extrabold tracking-wider">
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
				<div className="flex flex-col w-full">
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
				<div className="flex items-center justify-between gap-4 mt-4">

					<div className="flex-1">
						<img src={logoname} alt="Care Zone"/>
					</div>
					<div className="flex-1 text-center">
						<h2 className="text-lg italic font-medium">Satish Maurya</h2>
						<p className="text-primary">Founder</p>
					</div>
				</div>
			</div>
			<div className="flex flex-1 gap-4">
				<div className="flex-1">
					<img
						className="object-cover w-full h-full shadow-xl rounded-xl"
						src={aboutFirst}
						loading="lazy"
						alt="about-first"
					/>
				</div>
				<div className="flex flex-col flex-1 gap-4">
					<img
						className="object-cover w-full h-full shadow-xl rounded-xl"
						src={aboutSecond}
						loading="lazy"
						alt="about-second"
					/>
					<img
						className="object-cover w-full h-full shadow-xl rounded-xl"
						src={aboutThird}
						loading="lazy"
						alt="about-third"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
