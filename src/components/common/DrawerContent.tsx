const DrawerContent = () => {
	return (
		<nav>
			<ul className="font-semibold flex flex-col text-sm">
				<li className="p-3 text-primary hover:bg-black/5">Home</li>
				<li className="p-3 text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary ">
					Services
				</li>
				<li className="p-3 text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
					Contact us
				</li>
			</ul>
		</nav>
	);
};

export default DrawerContent;
