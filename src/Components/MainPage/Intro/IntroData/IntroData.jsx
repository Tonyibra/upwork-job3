import { PrimaryBtn } from "../../../Buttons/PrimaryBtn";
import "./IntroData.scss";

export const IntroData = () => {
  return (
    <div className="introdataContainer">
      <div className="wrapper">
        <div className="introDataHeader">
          <span>before the notary Alipore court kolkata</span>
        </div>
        <div className="introDataBody">
          <h2>
            online Rent agreement
            <br /> Kolkata & West Bengal
            <br />
            Lowest Price guarantee @300/-
          </h2>
        </div>
        <div className="desc">
          <p>
            Chat With Us now to create a rental/lease agreement in minutes and
            Get it Delivered to Your Desired Address.
          </p>
        </div>
        <div className="btnWrapper">
          <PrimaryBtn title="Chat now" />
        </div>
      </div>
    </div>
  );
};
