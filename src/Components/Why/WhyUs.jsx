import "./WhyUs.scss";
import Rent from "../../imgs/rent.png";
import { Card } from "./Card/Card";
import Dusty from "../../imgs/dusty.png";
import { data } from "./Data";
export const WhyUs = () => {
  return (
    <div className="whyusContainer">
      <div className="whyusImage">
        <img src={Rent} />
      </div>
      <div className="whyUsBody">
        <h2>
          WHY USE HAPPY HOUSE <br />
          FOR YOUR TENANCY AGREEMENTS?
        </h2>
      </div>
      {data?.map(({ title, desc, img, right }, index) => (
        <Card key={index} title={title} desc={desc} img={img} right={right} />
      ))}
    </div>
  );
};
