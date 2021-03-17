import './App.module.scss'
import Banner from './components/Banner/Banner'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import FirstBanner from './assets/banner-1.jpg'
import SecondBanner from './assets/banner-2.jpg'
import Picture from './assets/img-1.jpg'
import sections from './components/Utility/section'

function App() {
  return(
    <>
      <Hero />
      <Section
        title={sections.first.title} 
        content={sections.first.content} 
        link={sections.first.link} 
        hasPicture={true}
        hasLink={true}
        picture={Picture}/>
      <Banner 
        title={sections.firstBanner.title}
        buttonText={sections.firstBanner.buttonText}
        button={sections.firstBanner.button}
        align={sections.firstBanner.align}
        banner={FirstBanner}
         />
      <Section 
        title={sections.second.title} 
        content={sections.second.content} 
        hasLink={true}
        link={sections.second.link} 
        hasIcons={true}
      />
      <Banner 
        title={sections.secondBanner.title}
        content={sections.secondBanner.content}
        buttonText={sections.secondBanner.buttonText}
        button={sections.secondBanner.button}
        banner={SecondBanner} />

      <Section
        title={sections.third.title} 
        content={sections.third.content} 
        hasCarousel={true}
        isLaptop={true}
        hasStars={true}
        isNotLaptop={true}
        /> 
      <Footer />
    </>
  )
}

export default App;
