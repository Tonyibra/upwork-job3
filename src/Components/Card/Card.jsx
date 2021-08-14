import "./Card.scss";
import { useMediaQuery } from "react-responsive";
import Edit from "../../imgs/edit-icon.png";
import Euro from "../../imgs/euro-icon.png";
import Home from "../../imgs/home-icon.png";
import Smile from "../../imgs/smile-icon.png";
export const Card = ({ src, payload }) => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? children : null;
  };
  return (
    <div className="Cardcontainer">
      <Mobile>
        <div className="left">
          <img src={src} />
        </div>
        <div></div>
        <div className="right">
          <span>{payload}</span>
        </div>
      </Mobile>
      <Desktop>
        <div className="listContainer">
          <div className="widgetContainer">
            <div className="icons">
              <ul>
                <li>
                  <firgure>
                    <img src={Edit} alt="" />
                    <figcaption>
                      WE GENERATE
                      <br /> YOUR E-TENANCY
                    </figcaption>
                  </firgure>
                </li>
                <li>
                  <firgure>
                    <img src={Euro} alt="" />
                    <figcaption>
                      YOU ADD <br /> TENANTS
                    </figcaption>
                  </firgure>
                </li>
                <li>
                  <firgure>
                    <img src={Home} alt="" />
                    <figcaption>
                      EVERYONE <br /> E-SIGNS IT
                    </figcaption>
                  </firgure>
                </li>
                <li>
                  <firgure>
                    <img src={Smile} alt="" />
                    <figcaption>
                      WE SORT DEPOSIT & <br /> RENT COLLECTION
                    </figcaption>
                  </firgure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Desktop>
    </div>
  );
};
