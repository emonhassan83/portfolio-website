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

  const toggleTab = (index)=> {
      setToggleState(index);
  }

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        <div className="portfolio__content grid">
          <img className="portfolio__img" src={img1} alt="" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Artistry Academia</h3>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, enim
              iste fugiat dicta debitis recusandae.
            </p>
            <span
              onClick={() => toggleTab(1)}
              className="portfolio__button"
            >
              Demo
              <AiOutlineArrowRight className="portfolio__button-icon" />
            </span>

            <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>

            <div className="portfolio__modal-container">
            <div className="portfolio__modal-img">
              <img className="portfolio__modal-img" src={img1} alt="" />
            </div>

              <div className="portfolio__modal-content">
              <RxCross1 onClick={()=> toggleTab(0)} className='portfolio__modal-close'/>

              <h3 className="portfolio__modal-title">Artistry Academia</h3>
                <p className="portfolio__modal-time"></p>
              <h6 className="portfolio__modal-features-title">Features:</h6>
              <ul className="portfolio__modal-features">
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
              </ul>
              <p className="portfolio__modal-time">Created - </p>
              <p className="portfolio__modal-technology">Technologies - HTML, CSS -----------</p>
              <p className="portfolio__modal-link">View - <a href="#">Live Site</a> | <a href="">Client-Side Code</a> | <a href="">Server Side Code</a></p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content grid">
          <img className="portfolio__img" src={img2} alt="" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Toy Town</h3>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, enim
              iste fugiat dicta debitis recusandae.
            </p>
            <span
              onClick={() => toggleTab(2)}
              className="portfolio__button"
            >
              Demo
              <AiOutlineArrowRight className="portfolio__button-icon" />
            </span>

            <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
              
            <div className="portfolio__modal-container">
            <div className="portfolio__modal-img">
              <img className="portfolio__modal-img" src={img2} alt="" />
            </div>

              <div className="portfolio__modal-content">
              <RxCross1 onClick={()=> toggleTab(0)} className='portfolio__modal-close'/>

              <h3 className="portfolio__modal-title">Toy Town</h3>
                <p className="portfolio__modal-time"></p>
              <h6 className="portfolio__modal-features-title">Features:</h6>
              <ul className="portfolio__modal-features">
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
              </ul>
              <p className="portfolio__modal-time">Created - </p>
              <p className="portfolio__modal-technology">Technologies - HTML, CSS -----------</p>
              <p className="portfolio__modal-link">View - <a href="#">Live Site</a> | <a href="">Client-Side Code</a> | <a href="">Server Side Code</a></p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="portfolio__content grid">
          <img className="portfolio__img" src={img3} alt="" />
          <div className="portfolio__data">
            <h3 className="portfolio__title">Tastebite</h3>
            <p className="portfolio__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, enim
              iste fugiat dicta debitis recusandae.
            </p>
            <span
            onClick={() => toggleTab(3)}
              className="portfolio__button"
            >
              Demo
              <AiOutlineArrowRight className="portfolio__button-icon" />
            </span>

            <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
              
            <div className="portfolio__modal-container">
            <div className="portfolio__modal-img">
              <img className="portfolio__modal-img" src={img3} alt="" />
            </div>

              <div className="portfolio__modal-content">
              <RxCross1 onClick={()=> toggleTab(0)} className='portfolio__modal-close'/>

              <h3 className="portfolio__modal-title">Toy Town</h3>
                <p className="portfolio__modal-time"></p>
              <h6 className="portfolio__modal-features-title">Features:</h6>
              <ul className="portfolio__modal-features">
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
                <li className="portfolio__modal-feature">
                  <VscDebugBreakpointLog className="portfolio__modal-icon"/>
                  <p className="portfolio__modal-info">I develop the user interface.</p>
                </li>
              </ul>
              <p className="portfolio__modal-time">Created - </p>
              <p className="portfolio__modal-technology">Technologies - HTML, CSS -----------</p>
              <p className="portfolio__modal-link">View - <a href="#">Live Site</a> | <a href="">Client-Side Code</a> | <a href="">Server Side Code</a></p>
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
