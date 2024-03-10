import { Link } from "react-router-dom";

const DrawerContent = ({ toggle }: { toggle: () => void }) => {
	return (
		<nav>
			<ul className="flex flex-col text-sm font-semibold">
				<li onClick={toggle} className="p-3 text-primary hover:bg-black/5">
					<Link to="/">Dashboard</Link>
				</li>
				{/* <li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary ">
					<Link to="/new-patient">Patient Register</Link>
				</li> */}
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<Link to="/new-staff">Staff Register</Link>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<Link to="/service-bill">Generate Service Bill</Link>
				</li>
				<li onClick={toggle} className="p-3 text-text/75 hover:bg-black/5 active:text-primary hover:text-primary">
					<Link to="/expense-bill">Generate Expenses Bill</Link>
				</li>


			</ul>

		</nav>
	);
};

export default DrawerContent;
