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
import { useState } from "react";
import PopupForm from "./PopupForm";
const App = () => {
	const { ref, inView } = useInView();
	const [showModal,setShowModal] = useState(true)

	return (
		<main>
			{/* <Theme /> */}
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
			{showModal && <div className="fixed p-0 lg:p-8 inset-0 z-[999]  bg-black/10 flex justify-center items-center">

				<PopupForm onClose={()=>setShowModal(false)} />
			</div>}
		</main>
	);
};

export default App;
