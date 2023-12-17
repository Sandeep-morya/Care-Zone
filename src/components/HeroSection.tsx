import Button from "./ui/Button";
// import SocailIcons from "./ui/SocailIcons";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import hero_image from "../assets/web-images/hero-image.jpg";
import { FaPhoneAlt } from "react-icons/fa";

export const HeroSection = () => {
	const { ref, inView } = useInView();
	return (
		<section
			ref={ref}
			id="home"
			className="w-full overflow-hidden h-[480px] lg:h-[600px] xl:h-[700px] relative">
			<img
				className={twMerge(
					"absolute transition duration-1000 object-cover object-right-top lg:object-top w-full h-full scale-125",
					inView && "scale-100",
				)}
				src={hero_image}
			/>
			<div
				style={{
					backgroundImage: "linear-gradient(90deg, #FFFFFFAA 30%, transparent 60%)",
				}}
				className="absolute inset-0 z-10">
				<div
					className={twMerge(
						"w-[90%] md:w-[80%] transition-all duration-[1.5s] lg:w-[60%] opacity-0 -ml-28 xl:w-[50%] p-8 lg:p-16 xl:p-28 text-secondary/75 flex flex-col gap-4",
						inView && "ml-0 opacity-100",
					)}>
					<h1 style={{textShadow:"0 0 2px #00000055"}} className="text-3xl font-bold tracking-wide lg:text-5xl">
						We Provide Home Care Service For Your Family
					</h1>

					<p style={{ textShadow: "0 0 2px #00000055" }}>
						We offer compassionate and personalized home care
						services tailored to the unique needs of your family. Our dedicated
						professionals prioritize the well-being and comfort of your loved
						ones, ensuring a nurturing and supportive environment within the
						familiarity of home."
					</p>
					<a href="tel:9336622773" className="mt-4">
						<Button primary two icon={<FaPhoneAlt />}>
							Call us Today
						</Button>
					</a>
					{/* <div className="px-2 py-4">
						<SocailIcons large />
					</div> */}
				</div>
			</div>
		</section>
	);
};
