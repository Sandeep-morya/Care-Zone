import { lazy, Suspense } from "react";
import LoaderScreen from "../components/LoaderScreen";

const App = lazy(() => import("../App"));

const Home = () => {
	return (
		<Suspense fallback={<LoaderScreen/>}>
			<App />
		</Suspense>
	);
};

export default Home;
