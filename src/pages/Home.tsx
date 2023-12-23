import { lazy, Suspense, useEffect, useState } from "react";
import LoaderScreen from "../components/LoaderScreen";

const App = lazy(() => import("../App"));

const Home = () => {
	const [showComponent, setShowComponent] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowComponent(true);
		}, 300); // Adjust the delay time as needed

		return () => clearTimeout(timer);
	}, []);

	return (
		<Suspense fallback={<LoaderScreen />}>
			{showComponent ? <App /> : <LoaderScreen />}
		</Suspense>
	);
};

export default Home;
