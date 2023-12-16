interface Props {
	icon: JSX.Element;
	title: string;
	value: string;
}

const ContactData = ({ icon, title, value }: Props) => {
	return (
		<div className="flex items-center gap-4">
			<div className="bg-primary hover:bg-third transition active:scale-95 text-white flex justify-center items-center h-[45px] text-xl rounded-full aspect-square">
				{icon}
			</div>
			<div>
				<h3 className="font-semibold">{title}</h3>
				<p className="opacity-50">{value}</p>
			</div>
		</div>
	);
};

export default ContactData;
