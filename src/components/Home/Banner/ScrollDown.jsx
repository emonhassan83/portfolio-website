import { AiOutlineArrowDown } from "react-icons/ai";
import { useTheme } from "../../../lib/ThemeProvider";

const ScrollDown = () => {
  const { theme } = useTheme(); // use for dark and light themes
  return (
    <div
      className={`home__scroll ${
        theme.mode === "dark" ? "dark-bg-color text-gray-100" : "text__color"
      }`}
    >
      <a href="#about" className="home__scroll-button flex">
        <svg
          width="32px"
          height="32px"
          className={`home__scroll-mouse ${
            theme.mode === "dark" ? "text-gray-100" : "text__color"
          }`}
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // eslint-disable-next-line react/no-unknown-property
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className={`wheel ${
              theme.mode === "dark" ? "text-gray-100" : "text__color"
            }`}
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: `${theme.mode === "dark" ? "#fff" : "#000"}`,
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: `${theme.mode === "dark" ? "#fff" : "#000"}`,
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <span className="home__scroll-name flex items-center">
          Scroll Down
          <AiOutlineArrowDown className="home__scroll-arrow" />
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
