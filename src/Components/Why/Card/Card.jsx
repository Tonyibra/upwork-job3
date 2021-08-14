import "./Card.scss";
import Dusty from "../../../imgs/dusty.png";
import { useMediaQuery } from "react-responsive";

export const Card = ({ title, desc, img, right }) => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1100 });
    return isMobile ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1100 });
    return isDesktop ? children : null;
  };
  return (
    <div className="cardContainer">
      <Mobile>
        <div className="card">
          <h3>{title}</h3>
          <p>{desc}</p>
          <img src={img} />
        </div>
      </Mobile>
      <Desktop>
        <div className="card">
          {right ? (
            <div className="flex">
              <div className="left">
                <div className="title">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={img} alt="" />
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="right">
                <img src={img} alt="" />
              </div>

              <div className="left">
                <div className="title">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Desktop>
    </div>
  );
};
