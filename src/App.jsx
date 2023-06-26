import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <main className="main">
        <Banner/>
        <About/>
      </main>
    </>
  )
}

export default App
