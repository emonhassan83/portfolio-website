import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="flex justify-between items-center container">
        <a href="index.html" className="nav__logo">
          Emon
        </a>
        <div className="nav__logo">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <AiOutlineHome className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser className="nav__icon"/> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <GrDocumentText className="nav__icon"/> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <MdOutlineHomeRepairService className="nav__icon"/> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <BsFillImageFill className="nav__icon"/> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contract" className="nav__link">
                <BiSolidMessageSquareDetail className="nav__icon"/> Contract
              </a>
            </li>
          </ul>
          <RxCross1 className="nav__close" />
        </div>
        <div className="nav__toggle">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
