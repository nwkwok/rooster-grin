import './App.module.scss'
import Banner from './components/Banner/Banner'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import FirstBanner from './assets/banner-1.jpg'
import SecondBanner from './assets/banner-2.jpg'

function App() {
  return(
    <>
      <Hero />
      <Section />
      <Banner 
        banner={FirstBanner} />
      <Section />
      <Banner 
        banner={SecondBanner} />

      <Section />
      <Footer />
    </>
  )
}

export default App;
