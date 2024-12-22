interface Props {
	icon: JSX.Element | null;
	title: string;
	value: string;
	value2?: string
}

const ContactData = ({ icon, title, value, value2 }: Props) => {
	return (
		<div className="flex items-center gap-4">
			{icon && <div className="bg-primary hover:bg-third transition active:scale-95 text-white flex justify-center items-center h-[45px] text-xl rounded-full aspect-square">
				{icon}
			</div>}
			<div>
				<h3 className="font-semibold text-sm">{title}</h3>
				<p className="opacity-50 capitalize text-sm">{value}</p>
				{value2 && <p className="opacity-50 capitalize text-sm">{value2}</p>}
			</div>
		</div>
	);
};

export default ContactData;
