import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <main className="main">
        <Banner/>
        <About/>
        <Skills/>
        <Services/>
      </main>
    </>
  )
}

export default App
