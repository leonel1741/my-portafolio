import { useEffect, useState } from 'react'
import './App.css'
import MyNavBar from './components/MyNavBar'
import Presentation from './components/Presentation'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {

  const ids = {
    idAboutMe: 'about-me',
    idSkills: 'skills',
    idProyects: 'proyects',
    idContactMe: 'contact-me',
  };

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <MyNavBar scrollHeight={scrollHeight} ids={ids} />
      <div className='main'>
        <Presentation />
        <AboutMe scrollHeight={scrollHeight} id={ids.idAboutMe}/>
        <Skills scrollHeight={scrollHeight} id={ids.idSkills}/>
        <Proyects scrollHeight={scrollHeight} id={ids.idProyects}/>
        <ContactMe scrollHeight={scrollHeight} id={ids.idContactMe}/>
        <Footer />
      </div>
    </div>
  )
}

export default App
