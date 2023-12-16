
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HeroSection } from './components/HeroSection'
import CardsSection from './components/CardsSection'
import Services from './components/Services'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import Signature from './components/Signature'

const App = () => {
  return (
    <main>
        <Header />
        <Navbar/>
        <HeroSection/>
        <CardsSection/>
        <Services/>
        <AboutSection/>
        <ContactSection/>
        <Signature/>
        <Footer/>
    </main>
  )
}

export default App