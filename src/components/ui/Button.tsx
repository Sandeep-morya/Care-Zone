﻿import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
interface Props extends PropsWithChildren {
	primary?: boolean;
	icon?: JSX.Element;
	two?: boolean;
}

const Button = ({ children, primary, icon, two }: Props) => {
	return (
		<button
			className={twMerge(
				`${
					primary ? "bg-primary" : "bg-third"
				} px-8 py-3 font-semibold text-white rounded-full hover:-translate-y-4 transition ${
					primary ? "hover:bg-white hover:text-third" : "hover:bg-primary"
				} shadow flex items-center gap-2 text-sm duration-300`,
				two && "hover:bg-third hover:text-white whitespace-nowrap",
			)}>
			{icon}
			{children}
		</button>
	);
};

export default Button;
