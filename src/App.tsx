import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

const App = () => {
	const [auth, setAuth] = useState(sessionStorage.getItem("carezone-auth") ? true : false)

	return (
		<main>
			<Theme />
			<Header />
			{<LoginForm {...{ auth, setAuth }} />}

			<Footer />
		</main>
	);
};

export default App;
