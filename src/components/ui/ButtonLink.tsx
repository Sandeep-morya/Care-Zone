import { PropsWithChildren } from "react";
// import { twMerge } from "tailwind-merge";
import { FaArrowRightLong } from "react-icons/fa6";
interface Props extends PropsWithChildren {
    onClick:()=>void
}

const ButtonLink = ({ children ,onClick}: Props) => {
	return (
		<button
        onClick={onClick}
			className={`text-primary flex gap-4 items-center group-hover:text-white hover:text-white`}>
			<span className="text-sm font-semibold lg:text-md">{children}</span>
			<FaArrowRightLong />
		</button>
	);
};

export default ButtonLink;
