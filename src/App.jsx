import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import DarkAndLightToggle from "./components/DarkLightToogle/DarkAndLightToggle";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Banner />
        <About />
        <Skills />
        <Qualification/>
        <Services />
        <Portfolio/>
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <DarkAndLightToggle/>
    </>
  );
}

export default App;
