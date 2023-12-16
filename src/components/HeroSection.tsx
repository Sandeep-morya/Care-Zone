import Button from "./ui/Button";
import { FaAddressBook } from "react-icons/fa6";
import SocailIcons from "./ui/SocailIcons";
import {useInView} from "react-intersection-observer"
import { twMerge } from "tailwind-merge";
export const HeroSection = () => {
	const {ref,inView} = useInView();
	return (
		<section ref={ref} id="home" className="w-full overflow-hidden h-[480px] lg:h-[600px] xl:h-[700px] relative">
			<img
				className={twMerge("absolute transition duration-1000 object-cover object-top w-full h-full scale-125",inView && "scale-100")}
				src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/portrait-of-asian-disabled-senior-elderly-male-stand-with-walker-enjoy-stay-home-nursing-care--e1638524632908.jpg"
			/>
			<div
				style={{
					backgroundImage: "linear-gradient(90deg, #FFFFFF4D, #F2295B00 90%)",
				}}
				className="absolute inset-0 z-10">
				<div className={twMerge("w-[90%] md:w-[80%] transition-all duration-[1.5s] lg:w-[60%] opacity-0 -ml-28 xl:w-[50%] p-8 lg:p-16 xl:p-28 text-secondary/75 flex flex-col gap-4",inView && "ml-0 opacity-100")}>
					<h1 className="text-3xl tracking-wide font-bold lg:text-5xl">
						We Provide Home Care Service For Your Family
					</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
						ad minim nostrud
					</p>
					<div className="mt-4">
						<Button primary two icon={<FaAddressBook />}>
							Contact Us
						</Button>
					</div>
                    <div className="px-2 py-4">
                        <SocailIcons large/>
                    </div>
				</div>
			</div>
		</section>
	);
};
