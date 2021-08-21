import "./WhyCard.scss";
import Keyboard from "../assets/keyboard.svg";
export const WhyCard = ({ data }) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="cardIcon">
          <img src={data.image} alt="" />
        </div>
        <div className="cardTitle">
          <span>{data.title}</span>
        </div>
        <div className="cardDesc">
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};
