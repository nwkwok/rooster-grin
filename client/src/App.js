import './App.module.scss'
import Banner from './components/Banner/Banner'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import FirstBanner from './assets/banner-1.jpg'
import SecondBanner from './assets/banner-2.jpg'
import Picture from './assets/img-1.jpg'

const sections = {
  first: {
    title: 'LOREM IPSUM',
    content: 'This is the random content that I\'m writing for the first description box in the first section. Could have used Lorem Ipsum. Oh well! I already started typing... so I\'ll be sure to do it for the second one cause this would just be a silly waste of time to do again :P... yet here I am... Continuing to type. One more line will probably do? Yup :)',
    link: 'https://localhost:3000/firstSection'
  },
  second: {
    title: 'LOREM IPSUM DOLOR SIT AMET',
    content: 'This is the random content that I\'m writing for the first description box in the first section. Could have used Lorem Ipsum. Oh well!',
    link: 'https://localhost:3000/firstSection'
  },
  third: {
    title: 'LOREM IPSUM DOLOR SIT AMET',
    content: 'stars image'
  },
  firstBanner: {
    title: 'LOREM IPSUM',
    buttonText: 'First Banner',
    button: '#FF7219'
  },
  secondBanner: {
    title: 'LOREM IPSUM',
    content: 'This is the random content that I\'m writing for the first description box in the first section. Could have used Lorem Ipsum. Oh well! I already started typing...',
    buttonText: 'Second Banner',
    button: '#FF7219'
  }
}


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
        buttonText={sections.firstBanner.buttontext}
        button={sections.firstBanner.button}
        banner={FirstBanner}
         />
      <Section 
        title={sections.second.title} 
        content={sections.second.content} 
        hasLink={true}
        link={sections.second.link} 
        hasPicture={false}
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
        hasPicture={false}
        hasLink={false}
        /> 
      <Footer />
    </>
  )
}

export default App;
