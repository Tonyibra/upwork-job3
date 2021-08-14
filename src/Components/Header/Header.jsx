import { HeaderText } from "../HeaderText/HeaderText";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="container">
      <div className="headerContainer">
        <div className="left">
          <span className="title">KalaCoat</span>
        </div>
        <div className="right">
          <div className="hamburgur">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      <HeaderText />
    </div>
  );
};
