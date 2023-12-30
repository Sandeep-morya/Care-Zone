import { PropsWithChildren } from "react";
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
				`${primary ? "bg-primary" : "bg-secondary"
				} px-8 py-3 lg:py-4 font-semibold text-white rounded-full hover:-translate-y-4 transition ${primary ? "hover:bg-white hover:text-text" : "hover:bg-primary"
				} shadow-xl flex items-center gap-2 text-sm lg:text-base duration-300  whitespace-nowrap active:scale-95`,
				two && "hover:bg-secondary hover:text-white",
			)}>
			{icon}
			{children}
		</button>
	);
};

export default Button;
