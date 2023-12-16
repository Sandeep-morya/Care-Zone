// import { FaPlus } from "react-icons/fa6";
import { servicesData2 } from "../data";
// import { useEffect, useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";

type Props = (typeof servicesData2)[0];

const Card = ({ Icon, title }: Props) => {
	// const [value, setValue] = useState(0);
	// const { ref, inView } = useInView();
	// const idRef = useRef<number | undefined>(undefined);

	// useEffect(() => {
    //     //const speed = 40;
    //     // const x = count / speed;
    //     // const interval = 100 / x;

    //     const step = Math.floor(count/100)
	// 	if (inView) {
	// 		idRef.current = setInterval(() => {
	// 			setValue((prev) => {
	// 				if (prev >= count - 1) {
	// 					clearInterval(idRef.current);
    //                     return count
	// 				}
	// 				return prev + step;
	// 			});
    //         }, 12);
	// 	}else{
    //         setValue(0)
    //         clearInterval(idRef.current)
    //     }

	// 	return () => {
	// 		clearInterval(idRef.current);
	// 	};
	// }, [count, inView]);

	return (
		<article
			// ref={ref}
			className="flex flex-col items-center justify-center gap-1 py-6 lg:gap-2 lg:py-12">
			<div className="text-4xl lg:text-5xl text-primary">
				<Icon />
			</div>
			{/* <div className="flex items-center  text-primary">
				<span className="text-3xl lg:text-4xl font-semibold tracking-wide text-white">
					{count}
				</span>
				<FaPlus />
			</div> */}
			<p className="text-sm lg:text-base text-white/50">{title}</p>
		</article>
	);
};

export default Card;
