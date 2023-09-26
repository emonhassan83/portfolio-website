import "./Portfolio.css";
import img1 from "../../assets/project_img/project1.png";
import img2 from "../../assets/project_img/project2.png";
import img3 from "../../assets/project_img/project3.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { useState } from "react";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      {/* 1st Project */}
      <div className="portfolio__container container">
        <div className="portfolio__content grid">
          <img className="portfolio__img" src={img1} alt="" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Artistry Academia</h3>
            <p className="portfolio__description">
              MingleMotion Express is a versatile video editing platform that
              empowers users to craft a wide range of professional quality
              videos. It focuses on front-end and backend developments.
            </p>
            <span onClick={() => toggleTab(1)} className="portfolio__button">
              Demo
              <AiOutlineArrowRight className="portfolio__button-icon" />
            </span>

            <div
              className={
                toggleState === 1
                  ? "portfolio__modal active-modal"
                  : "portfolio__modal"
              }
            >
              <div className="portfolio__modal-container">
                <div className="portfolio__modal-img">
                  <img className="portfolio__modal-img" src={img1} alt="" />
                </div>

                <div className="portfolio__modal-content">
                  <RxCross1
                    onClick={() => toggleTab(0)}
                    className="portfolio__modal-close"
                  />

                  <h3 className="portfolio__modal-title">Artistry Academia</h3>
                  <p className="portfolio__modal-time"></p>
                  <h6 className="portfolio__modal-features-title">Features:</h6>
                  <ul className="portfolio__modal-features">
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        The website has integrated Firebase authentication to
                        implement private routes and uses JWT for authorization.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Website main functionalities like video upload, add
                        audio, image, text, animation, effect, fill, and export
                        and more.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Implement dashboard stores data on MongoDB database and
                        state management using Redux Toolkit.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Implements stripe and SSL commerce payment system for
                        pricing and donate page functionality.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Implement dark-light mode, message option, profile
                        update, dynamic feedback, and various functionality.
                      </p>
                    </li>
                  </ul>
                  <p className="portfolio__modal-time">
                    <span>Created:</span> Aug 2023 - Sep 2023
                  </p>
                  <p className="portfolio__modal-technology">
                    <span>Technologies:</span> React,Typescript, Redux, Firebase
                    authentication, MongoDB, stripe, ssl-commerz, NodeJS, CSS
                    frameworks like Tailwind CSS, DaisyUI and etc.
                  </p>
                  <p className="portfolio__modal-link">
                    <span>View -</span>{" "}
                    <a
                      href="https://motion-mingle.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/shanto001971/shanto001971-online-video-editing-platform-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client-Side Code
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/shanto001971/online-video-editing-platform-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side Code
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Project */}
        <div className="portfolio__content grid">
          <img className="portfolio__img" src={img2} alt="" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Artistry Academia</h3>
            <p className="portfolio__description">
              Artistry Academia is a summer camp school & that allows students
              to enroll and learn specific art activities. It focuses on
              front-end and backend developments.
            </p>
            <span onClick={() => toggleTab(2)} className="portfolio__button">
              Demo
              <AiOutlineArrowRight className="portfolio__button-icon" />
            </span>

            <div
              className={
                toggleState === 2
                  ? "portfolio__modal active-modal"
                  : "portfolio__modal"
              }
            >
              <div className="portfolio__modal-container">
                <div className="portfolio__modal-img">
                  <img className="portfolio__modal-img" src={img2} alt="" />
                </div>

                <div className="portfolio__modal-content">
                  <RxCross1
                    onClick={() => toggleTab(0)}
                    className="portfolio__modal-close"
                  />

                  <h3 className="portfolio__modal-title">Artistry Academia</h3>
                  <p className="portfolio__modal-time"></p>
                  <h6 className="portfolio__modal-features-title">Features:</h6>
                  <ul className="portfolio__modal-features">
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Use Tailwind CSS framework for developing a responsive
                        website.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Integrated Firebase for two ways sign-in methods with
                        form validation.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Dashboard with private routes usage JWT, Axios for
                        authorization & stores data on MongoDB database.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Performs CRUD operation through NodeJS and Express JS.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        This website used implement stripe payment method.
                      </p>
                    </li>
                  </ul>
                  <p className="portfolio__modal-time">
                    <span>Created:</span> June 2023 - July 2023
                  </p>
                  <p className="portfolio__modal-technology">
                    <span>Technologies:</span> React, Firebase authentication,
                    MongoDB, stripe, NodeJS, CSS frameworks like Tailwind CSS,
                    DaisyUI and etc.
                  </p>
                  <p className="portfolio__modal-link">
                    <span>View -</span>{" "}
                    <a
                      href="https://artistry-academia.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/emonhassan83/artistry-academia-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client-Side Code
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/emonhassan83/artistry-academia-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side Code
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd Project */}
        <div className="portfolio__content grid">
          <img className="portfolio__img" src={img3} alt="" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Toy Town</h3>
            <p className="portfolio__description">
              ToyTown is a website that sells educational-related toys (like
              science, language, & engineering) shop market. It focuses on
              front-end and backend developments.
            </p>
            <span onClick={() => toggleTab(3)} className="portfolio__button">
              Demo
              <AiOutlineArrowRight className="portfolio__button-icon" />
            </span>

            <div
              className={
                toggleState === 3
                  ? "portfolio__modal active-modal"
                  : "portfolio__modal"
              }
            >
              <div className="portfolio__modal-container">
                <div className="portfolio__modal-img">
                  <img className="portfolio__modal-img" src={img3} alt="" />
                </div>

                <div className="portfolio__modal-content">
                  <RxCross1
                    onClick={() => toggleTab(0)}
                    className="portfolio__modal-close"
                  />

                  <h3 className="portfolio__modal-title">Toy Town</h3>
                  <p className="portfolio__modal-time"></p>
                  <h6 className="portfolio__modal-features-title">Features:</h6>
                  <ul className="portfolio__modal-features">
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Use two-way login systems (Google and Email/Password)
                        via Firebase.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Use private routes & ensure user data privacy and
                        protection.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Implemented React Router, Context API, React Hook Form,
                        use AOS package for simple animation, dynamic title.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Performs CRUD operation through NodeJS and Express JS.
                      </p>
                    </li>
                    <li className="portfolio__modal-feature">
                      <VscDebugBreakpointLog className="portfolio__modal-icon" />
                      <p className="portfolio__modal-info">
                        Use Tailwind CSS framework for developing a responsive
                        website.
                      </p>
                    </li>
                  </ul>
                  <p className="portfolio__modal-time">
                    <span>Created:</span> May 2023 - June 2023
                  </p>
                  <p className="portfolio__modal-technology">
                    <span>Technologies:</span> React, Firebase authentication,
                    MongoDB, NodeJS, CSS frameworks (Tailwind CSS, DaisyUI) etc.
                  </p>
                  <p className="portfolio__modal-link">
                    <span>View -</span>{" "}
                    <a
                      href="https://toy-town-1d358.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/emonhassan83/toy-town-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client-Side Code
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/emonhassan83/toy-town-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side Code
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
