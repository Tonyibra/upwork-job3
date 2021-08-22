import "./Footer.scss";
import Mail from "./assets/mail.svg";
import Call from "./assets/call.svg";
import Facebook from "../Topbar/SocialsIcons/facebook-brands.svg";
import Twitter from "../Topbar/SocialsIcons/twitter-brands.svg";
import Pintrest from "../Topbar/SocialsIcons/pinterest-brands.svg";
export const Footer = () => {
  return (
    <div className="footerWrapper" id="footer">
      <div className="overlay">
        <div className="content"></div>
      </div>
      <div className="footerContent">
        <div className="footerBody">
          <div className="left">
            <span>KALACOAT</span>
            <div className="about">
              <p>Kala Coat , E-26/16, EPIP, Phase 4, Kolkata 700107</p>
            </div>
          </div>
          <div className="middle">
            <span>QUICK LINKS</span>
            <div className="about">
              <ul>
                <li>How it Works</li>
                <li>Testimonials</li>
                <li>Why Us</li>
                <li>Services</li>
                <li>FAQ</li>
                <li>Coming Soon</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <span>CONTACT INFO</span>
            <div className="about">
              <div className="top">
                <div className="mail">
                  <img src={Mail} alt="Mail" />
                  <a href="mailto:kalacoat.online@gmail.com">
                    kalacoat.online@gmail.com
                  </a>
                </div>
                <div className="phone">
                  <img src={Call} alt="phone" className="phone" />
                  <span>984543314</span>
                </div>
              </div>
              <div className="bottom">
                <span>SOCIAL MEDIA</span>

                <div className="socials">
                  <div className="social">
                    <img src={Facebook} alt="facebook" />
                  </div>
                  <div className="social">
                    <img src={Twitter} alt="twitter" />
                  </div>
                  <div className="social">
                    <img src={Pintrest} alt="pintrest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
