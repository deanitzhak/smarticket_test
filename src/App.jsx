// App.jsx
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/Pages/Hero'
import LogoCarousel from './components/Footer/LogoCarousel'
import SellChannelsSection from './components/Hero/SellChannels'
import StatsSection from './components/StatsSection/StatsSection'
import './style/App.css'
function App() {
  return (
    <>
      <Navigation />
      <main>
        {/* Your content here */}
        <Hero />
        <LogoCarousel />
        <StatsSection />      
        <SellChannelsSection />
      </main>
      <Footer />
    </>
  )
}

export default App