import "./Topbar.scss";
import Facebook from "./SocialsIcons/facebook-brands.svg";
import Twitter from "./SocialsIcons/twitter-brands.svg";
import Pinterest from "./SocialsIcons/pinterest-brands.svg";
import { useMediaQuery } from "react-responsive";
import { Menu } from "@material-ui/icons";
export const Topbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <header className="topbarContainer">
      <div className="topbar">
        <div className="logo">
          <span>Kalacoat</span>
        </div>
        {!isMobile ? (
          <>
            <div className="navList">
              <ul>
                <li>How it works</li>
                <li>Testimonials</li>
                <li>Why us</li>
                <li>Services</li>
                <li>Faq</li>
                <li>Coming soon</li>
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
            <Menu className="mobileMenu-icon" fontSize="large" />
          </div>
        )}
      </div>
    </header>
  );
};
