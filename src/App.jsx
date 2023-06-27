import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Navbar/>
      <main className="main">
        <Banner/>
        <About/>
        <Skills/>
        <Services/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App
