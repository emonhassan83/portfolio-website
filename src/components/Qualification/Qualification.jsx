import "./Qualification.css";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Education & Experience</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid">
        <div className="qualification__item">
          <BsBriefcase className="qualification__icon" />
          <span className="qualification__date">2022-present</span>
          <h3 className="qualification__subtitle">
            Web Developer <span>Courses</span>
          </h3>
          <p className="qualification__description">
            I have successfully completed a comprehensive Web Development Course
            with Jhankar Mahbub (Batch-7).
          </p>
        </div>

        <div className="qualification__item">
          <RiGraduationCapLine className="qualification__icon" />
          <span className="qualification__date">2020-present</span>
          <h3 className="qualification__subtitle">
            Bachelor Degree <span>Govt. Bangla College</span>
          </h3>
          <p className="qualification__description">
            Currently, I am pursuing a Bachelor of Science degree in Chemistry
            at Govt. Bangla College in Dhaka.
          </p>
        </div>

        <div className="qualification__item">
          <BsBriefcase className="qualification__icon" />
          <span className="qualification__date">2022-present</span>
          <h3 className="qualification__subtitle">
            MERN Steak Developer <span>Courses</span>
          </h3>
          <p className="qualification__description">
            I have successfully completed a comprehensive Web Development Course
            with Jhankar Mahbub (Batch-7).
          </p>
        </div>

        <div className="qualification__item">
          <RiGraduationCapLine className="qualification__icon" />
          <span className="qualification__date">2018-2021</span>
          <h3 className="qualification__subtitle">
            College Degree <span>Govt Bulbul College</span>
          </h3>
          <p className="qualification__description">
            I hold a collage degree in Science from Govt. Bulbul College, Pabna,
            obtained between 2018 and 2019.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
