import "./Testimonial.css";
import { TestimonialData } from "./TestimonialData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useTheme } from "../ThemePrvider/ThemeProvider";

const Testimonial = () => {
  const { theme } = useTheme(); // use for dark and light themes

  return (
    <section
      className={`testimonial  section ${
        theme.mode === "dark"
          ? "dark-bg-color text-gray-100 w-[100%]"
          : "bg-color title__color"
      }`}
      id="testimonial"
    >
      <h2
        className={`section__title ${
          theme.mode === "dark" ? "text-gray-100" : "text__color"
        }`}
      >
        Client Feedback
      </h2>
      <span className="section__subtitle">Explore Testimonial</span>
      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {TestimonialData.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide key={id} className="testimonial__card">
              <img className="testimonial__img" src={image} alt="" />
              <h3
                className={`testimonial__name ${
                  theme.mode === "dark" ? "text-gray-100" : "text__color"
                }`}
              >
                {title}
              </h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
