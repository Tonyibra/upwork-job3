import "./Topbar.scss";
import Facebook from "./SocialsIcons/facebook-brands.svg";
import Twitter from "./SocialsIcons/twitter-brands.svg";
import Pinterest from "./SocialsIcons/pinterest-brands.svg";
import { useMediaQuery } from "react-responsive";
import { Menu } from "@material-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";

export const Topbar = ({ colorChange }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <header className="topbarContainer">
      <div className="topbar">
        <div className="logo">
          <span
            className={colorChange && "white"}
            onClick={() => scrollToTop()}
          >
            Kalacoat
          </span>
        </div>
        {!isMobile ? (
          <>
            <div className="navList">
              <ul>
                <li className={colorChange && "white"}>
                  <Link to="works" smooth={true} delay={100} offset={-50}>
                    How it works
                  </Link>
                </li>
                <li className={colorChange && "white"}>
                  <Link
                    to="testimonials"
                    smooth={true}
                    delay={100}
                    offset={-45}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className={colorChange && "white"}>
                  <Link to="whyus" smooth={true} delay={100} offset={-50}>
                    Why us
                  </Link>
                </li>
                <li className={colorChange && "white"}>
                  <Link to="services" smooth={true} delay={100} offset={-50}>
                    Services
                  </Link>
                </li>
                <li className={colorChange && "white"}>Faq</li>
                <li className={colorChange && "white"}>Coming soon</li>
              </ul>
            </div>
            <div className="socials">
              <div className="icons">
                <img src={Facebook} alt="facebook-logo" />
              </div>
              <div className="icons">
                <img src={Twitter} alt="facebook-logo" />
              </div>
              <div className="icons">
                <img src={Pinterest} alt="facebook-logo" />
              </div>
            </div>
          </>
        ) : (
          <div className="mobile-Container">
            <Menu
              className={"mobileMenu-icon " + (colorChange && "white")}
              fontSize="large"
            />
          </div>
        )}
      </div>
    </header>
  );
};
