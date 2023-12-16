const DrawerContent = () => {
	return (
		<nav>
			<ul className="flex flex-col text-sm font-semibold">
				<li className="p-3 text-primary hover:bg-black/5">
					<a href="#home">Home</a>
				</li>
				<li className="p-3 text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary ">
					<a href="#services">Services</a>
				</li>
				<li className="p-3 text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#about-us">About us</a>
				</li>
				<li className="p-3 text-secondary/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<a href="#contact-us">Contact us</a>
				</li>

			</ul>
		</nav>
	);
};

export default DrawerContent;
