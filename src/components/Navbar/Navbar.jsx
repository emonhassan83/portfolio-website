import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useTheme } from "../ThemePrvider/ThemeProvider";

const Navbar = () => {
  const { theme } = useTheme(); // use for dark and light themes
  /* Change Background Header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, aee the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header
      className={`header ${
        theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg-color"
      }`}
    >
      <nav className="nav container">
        <a
          href="index.html"
          className={`nav__logo ${
            theme.mode === "dark" ? "text-gray-100" : "text-dark-color"
          } `}
        >
          Emon
        </a>
        <div
          className={`${toggle ? "nav__menu show-menu" : "nav__menu"} ${
            theme.mode === "dark"
              ? "text-gray-100 hover:text-white dark-bg-color"
              : "text-dark-color bg-color"
          }`}
        >
          <ul
            className={`nav__list ${
              theme.mode === "dark" ? "text-gray-100" : "text-dark-color"
            }`}
          >
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={`
                  ${
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  } ${
                  theme.mode === "dark"
                    ? "text-gray-100 hover:text-white"
                    : "text-dark-color"
                }
                `}
              >
                <AiOutlineHome className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={`
                  ${
                    activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  } ${
                  theme.mode === "dark"
                    ? "text-gray-100 hover:text-white"
                    : "text-dark-color"
                }
                `}
              >
                <AiOutlineUser className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skill")}
                className={`
                  ${
                    activeNav === "#skill"
                      ? "nav__link active-link"
                      : "nav__link"
                  } ${
                  theme.mode === "dark"
                    ? "text-gray-100 hover:text-white"
                    : "text-dark-color"
                }
                `}
              >
                <GrDocumentText className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={`
                  ${
                    activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                  } ${
                  theme.mode === "dark"
                    ? "text-gray-100 hover:text-white"
                    : "text-dark-color"
                }
                `}
              >
                <MdOutlineHomeRepairService className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={`
                  ${
                    activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  } ${
                  theme.mode === "dark"
                    ? "text-gray-100 hover:text-white"
                    : "text-dark-color"
                }
                `}
              >
                <BsFillImageFill className="nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={`
                  ${
                    activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  } ${
                  theme.mode === "dark"
                    ? "text-gray-100 hover:text-white"
                    : "text-dark-color"
                }
                `}
              >
                <BiSolidMessageSquareDetail className="nav__icon" /> Contract
              </a>
            </li>
          </ul>
          <RxCross1
            className={`nav__close ${
              theme.mode === "dark"
                ? "text-gray-100 hover:text-white"
                : "text-dark-color"
            }`}
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`nav__toggle ${
            theme.mode === "dark"
              ? "text-gray-100 hover:text-white"
              : "text-dark-color"
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
