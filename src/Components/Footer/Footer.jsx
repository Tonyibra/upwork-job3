import "./Footer.scss";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return isDesktop ? children : null;
  };
  return (
    <div className="footerContainer">
      <Mobile>
        <div className="footerTitle">
          <h2>FAST, SIMPLE & EFFICIENT...</h2>
        </div>
        <div className="footerBody">
          <ul>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                Digitally signed by <br /> yourself + tenants
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                We store all the details, it’s <br /> really easy the next time
                <br /> you have new tenants
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                Automatically distributed to <br /> tenants via email + <br />
                Whatsapp
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                Up to date contract with <br /> latest compliance
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                It takes less than 5 mins of <br /> your time to setup a tenancy
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                We’ll send you a timely <br /> reminder to let you know the{" "}
                <br />
                lease is nearly up
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>
                Agreements for landlords
                <br /> who use a Ltd Company,
                <br />
                Partnersip or Individual
              </span>
            </li>
            <li>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                alt=""
              />
              <span>Oh and it’s FREE.</span>
            </li>
          </ul>
        </div>
      </Mobile>
      <Desktop>
        <div className="footerTitle">
          <h2>FAST, SIMPLE & EFFICIENT...</h2>
        </div>
        <div className="footerCard">
          <div className="left">
            <ul>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  Up to date contract with latest <br /> compliance
                </span>
              </li>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  Automatically distributed to <br /> rtenants via email +
                  Whatsapp
                </span>
              </li>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  Digitally signed by yourself <br /> + tenants
                </span>
              </li>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  We store all the details, it’s <br /> really easy the next
                  time you
                  <br />
                  have new tenants
                </span>
              </li>
            </ul>
          </div>
          <div className="divider" />
          <div className="right">
            <ul>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  Up to date contract with latest <br /> compliance
                </span>
              </li>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  Automatically distributed to <br /> rtenants via email +
                  Whatsapp
                </span>
              </li>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  Digitally signed by yourself <br /> + tenants
                </span>
              </li>
              <li>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-check-mark-16.png"
                  alt=""
                />
                <span>
                  We store all the details, it’s <br /> really easy the next
                  time you
                  <br />
                  have new tenants
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Desktop>
    </div>
  );
};

export default Footer;
