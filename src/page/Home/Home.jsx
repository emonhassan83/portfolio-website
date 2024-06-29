import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";
import Qualification from "../../components/Qualification/Qualification";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import Testimonial from "../../components/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
};

export default HomePage;
