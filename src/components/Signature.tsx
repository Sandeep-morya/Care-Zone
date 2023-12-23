import { FaPhoneAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";
import Li from "./ui/Li";

const Signature = () => {
	return (
		<section className="flex flex-col gap-6 p-6 pt-0 mb-24 lg:flex-row lg:gap-8 xl:gap-28 lg:px-12 xl:px-28 2xl:px-48">
			<div className="w-full lg:w-[50%]">
				<div className="flex items-start gap-6">
					<div className="text-5xl text-primary">
						<FaQuoteRight />
					</div>
					<p className="text-lg italic font-medium text-secondary/75">
						We provide supportive, compassionate and highly qualified nurses for
						all your nursing and medical needs
					</p>
				</div>
				<a href="tel:9336622773" className="flex flex-col items-center justify-center p-8 mt-4 transition shadow rounded-xl bg-third active:scale-95">
					<div id="call-icon" className="w-[65px] rounded-full text-2xl aspect-square flex justify-center items-center bg-primary text-white hover:bg-white hover:text-third">
						<FaPhoneAlt />
					</div>
					<h2 className="mt-4 mb-2 text-lg font-medium text-white">
						Emergency Call
					</h2>
					<p className="tracking-wider text-white/50">{"(+91) 9336622773"}</p>
				</a>
				<div className="flex items-center justify-center">
					{/* signature */}
				</div>
			</div>
			<div className="flex flex-col lg:w-[50%]">
				<p className="text-third/75">
					We offer various in-home healthcare services like Physiotherapy,
					Nursing, Attendant/Home Health Aide, Doctor Visit. We will keep on
					adding more in-home healthcare services with a vision to bring world
					class medical care into our patients’ homes.
				</p>
				<div className="flex flex-col gap-2 mt-6 lg:gap-12 lg:flex-row ">
					<div className="flex flex-col gap-2">
						<Li>Nursing Care</Li>
						<Li>Patient Care</Li>
						<Li>Elder Care</Li>
					</div>
					<div className="flex flex-col gap-2">
						<Li>Baby Care</Li>
						<Li>Physiotherapy</Li>
						<Li>Blood Test</Li>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signature;
