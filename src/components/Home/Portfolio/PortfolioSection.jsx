import { useTheme } from "../../../lib/ThemeProvider";
import { useGetAllProjectsQuery } from "../../../redux/features/projectApi";
import "./Portfolio.css";
import SinglePortfolio from "./SinglePortfolio";

const PortfolioSection = () => {
  const { data } = useGetAllProjectsQuery();
  const { theme } = useTheme(); //* use for dark and light themes

  return (
    <section
      className={`portfolio section ${
        theme.mode === "dark"
          ? "dark-bg-color text-gray-100"
          : "bg-color title__color"
      }`}
      id="portfolio"
    >
      <h2
        className={`section__title ${
          theme.mode === "dark" ? "text-gray-100" : "text__color"
        }`}
      >
        Portfolio
      </h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        {
            data.data.length> 0 && data.data.slice(0,3).map((project) => <SinglePortfolio key={project._id} project={project}/>)
        }
      </div>
    </section>
  );
};

export default PortfolioSection;
