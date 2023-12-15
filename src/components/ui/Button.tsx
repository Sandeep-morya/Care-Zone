import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
	primary?: boolean;
  icon?:JSX.Element
}

const Button = ({ children, primary,icon }: Props) => {
	return (
		<button
			className={`${
				primary ? "bg-primary" : "bg-secondary"
			} px-8 py-3 font-semibold text-white rounded-full hover:-translate-y-4 transition ${
        primary ? "hover:bg-white hover:text-secondary" : "hover:bg-primary"
			} flex items-center gap-2 text-sm duration-300`}>
        {icon}
			{children}
		</button>
	);
};

export default Button;
