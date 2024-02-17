import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import Signature from "./components/Signature";
import { useInView } from "react-intersection-observer";
import LocationView from "./components/LocationView";
import Theme from "./components/Theme";

const App = () => {
	const { ref, inView } = useInView();
	return (
		<main>
			<Theme />
			<Header target={ref} />
			<Navbar inView={inView} />
			<HeroSection />
			<CardsSection />
			<Services />
			<AboutSection />
			<ContactSection />
			<Signature />
			<LocationView />
			<Footer />
		</main>
	);
};

export default App;
