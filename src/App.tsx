
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HeroSection } from './components/HeroSection'
import CardsSection from './components/CardsSection'
import Services from './components/Services'

const App = () => {
  return (
    <main>
        <Header />
        <Navbar/>
        <HeroSection/>
        <CardsSection/>
        <Services/>
        <Footer/>
    </main>
  )
}

export default App