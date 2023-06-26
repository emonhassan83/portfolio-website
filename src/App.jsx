import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <main className="main">
        <Banner/>
        <About/>
        <Skills/>
      </main>
    </>
  )
}

export default App
