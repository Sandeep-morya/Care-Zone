import logo from "../../assets/logo.png";

const Logo = () => {
	return (
		<div className="w-[240px] m-auto">
			<img
				className="object-contain w-full h-full drop-shadow"
				src={logo}
				alt="care-zone-logo"
			/>
		</div>
	);
};

export default Logo;
