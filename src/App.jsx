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
import { ThemeProvider } from "./components/ThemePrvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
