import { FaPhoneAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";
import Li from "./ui/Li";

const Signature = () => {
	return (
		<section className="p-6 pt-0 mb-24 flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-28 lg:px-12 xl:px-28">
			<div className="w-full lg:w-[50%]">
				<div className="flex items-start gap-6">
					<div className="text-primary text-5xl">
						<FaQuoteRight />
					</div>
					<p className="font-medium text-lg text-secondary/75 italic">
						We provide supportive, compassionate and highly qualified nurses for
						all your nursing and medical needs
					</p>
				</div>
				<div className="shadow rounded-xl mt-4 bg-third flex flex-col justify-center items-center p-8">
					<div className="w-[65px] rounded-full text-2xl aspect-square flex justify-center items-center bg-primary text-white hover:bg-white hover:text-third">
						<FaPhoneAlt />
					</div>
					<h2 className="font-medium text-lg text-white mt-4 mb-2">
						Emergency Call
					</h2>
					<p className="text-white/50 tracking-wider">{"(+91) 9984713288"}</p>
				</div>
				<div className="flex justify-center items-center">
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
				<div className="flex mt-6 flex-col gap-2 lg:gap-12 lg:flex-row ">
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
