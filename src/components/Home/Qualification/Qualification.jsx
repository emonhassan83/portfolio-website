import "./Qualification.css";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { useTheme } from "../../../lib/ThemeProvider";

const Qualification = () => {
  const { theme } = useTheme(); //* use for dark and light themes

  return (
    <section
      className={`qualification section ${
        theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg-color"
      }`}
      id="qualification"
    >
      <h2
        className={`section__title ${
          theme.mode === "dark" ? "text-gray-100" : "text__color"
        }`}
      >
        Education & Experience
      </h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid">
        <div className="qualification__item">
          <BsBriefcase
            className={`qualification__icon ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          />
          <span
            className={`qualification__date ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          >
            2023-2024
          </span>
          <h3
            className={`qualification__subtitle ${
              theme.mode === "dark"
                ? "dark-bg-color text-gray-100"
                : "text__color"
            }`}
          >
            Full Stack Developer <span>Courses</span>
          </h3>
          <p className="qualification__description">
            I have successfully completed a comprehensive Next Level Web
            development Course with Programming Hero (Batch-2).
          </p>
        </div>

        <div className="qualification__item">
          <RiGraduationCapLine
            className={`qualification__icon ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          />
          <span
            className={`qualification__date ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          >
            2024-present
          </span>
          <h3
            className={`qualification__subtitle ${
              theme.mode === "dark"
                ? "dark-bg-color text-gray-100"
                : "text__color"
            }`}
          >
            CS Fundamentals With Phitron <span>Spring 2024</span>
          </h3>
          <p className="qualification__description">
            Currently, I am currently pursuing CS Fundamentals With Phitron, a
            program building a strong foundation in computer science.
          </p>
        </div>

        <div className="qualification__item">
          <BsBriefcase
            className={`qualification__icon ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          />
          <span
            className={`qualification__date ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          >
            2022-2023
          </span>
          <h3
            className={`qualification__subtitle ${
              theme.mode === "dark"
                ? "dark-bg-color text-gray-100"
                : "text__color"
            }`}
          >
            MERN Steak Developer <span>Courses</span>
          </h3>
          <p className="qualification__description">
            I have successfully completed a comprehensive Web Development Course
            with Jhankar Mahbub (Batch-7).
          </p>
        </div>

        <div className="qualification__item">
          <RiGraduationCapLine
            className={`qualification__icon ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          />
          <span
            className={`qualification__date ${
              theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg__gray"
            }`}
          >
            2020-present
          </span>
          <h3
            className={`qualification__subtitle ${
              theme.mode === "dark"
                ? "dark-bg-color text-gray-100"
                : "text__color"
            }`}
          >
            Bachelor Degree <span>Govt. Bangla College</span>
          </h3>
          <p className="qualification__description">
            Currently, I am pursuing a Bachelor of Science degree in Chemistry
            at Govt. Bangla College in Dhaka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
