import "./Banner.css";
import BannerText from "./BannerText";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Banner = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <BannerText />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Banner;
