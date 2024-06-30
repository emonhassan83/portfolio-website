import Banner from "../../components/Home/Banner/Banner";
import About from "../../components/Home/About/About";
import Skills from "../../components/Home/Skills/Skills";
import Qualification from "../../components/Home/Qualification/Qualification";
import Services from "../../components/Home/Services/Services";
import Portfolio from "../../components/Home/Portfolio/Portfolio";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Contact from "../../components/Home/Contact/Contact";

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
