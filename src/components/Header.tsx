import Button from "./ui/Button";
import { FaUserDoctor } from "react-icons/fa6";
import LogoVertical from "./logos/LogoVertical";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
	const { auth, setAuth } = useAuth();
	const logout = () => {
		setAuth(false);
		sessionStorage.removeItem("carezone-auth");
	}
	return (
		<header className="flex justify-between px-4 py-6 border-b lg:px-12 xl:px-24 2xl:px-48">
			<div className="flex-1">
				<div className="w-[80%] m-auto">
					<LogoVertical className="w-[200px] mt-3 -ml-8 md:-ml-0 " />
				</div>
			</div>

			{auth ? (

				<Button onClick={logout} icon={<FaUserDoctor />}>Logout</Button>

			) : (
				<Link to="/" className="m-auto">
					<Button icon={<FaUserDoctor />}>Login</Button>
				</Link>
			)}
		</header>
	);
};

export default Header;
