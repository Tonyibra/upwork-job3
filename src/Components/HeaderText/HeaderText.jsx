import "./HeaderText.scss";
import HeroImage from "../../imgs/hero_home.png";
import { useMediaQuery } from "react-responsive";

export const HeaderText = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? children : null;
  };
  return (
    <div className="containers">
      <Desktop>
        <div className="svgWrapper">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="path"
              class="elementor-shape-fill"
              d="M615.2,96.7C240.2,97.8,0,18.9,0,0v100h1000V0C1000,19.2,989.8,96,615.2,96.7z"
            ></path>
          </svg>
        </div>
      </Desktop>
      <div className="left">
        <div className="title">
          <h1>The free, fast & easy way to do tenancy agreements.</h1>

          <h2>No Credit Card Required.</h2>
        </div>
        <div className="right">
          <img src={HeroImage} loading="lazy" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="headerBtn">TRY IT NOW - IT'S FREE</button>
      </div>
    </div>
  );
};
