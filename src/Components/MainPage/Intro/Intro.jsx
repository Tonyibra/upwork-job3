import "./Intro.scss";
import { IntroData } from "./IntroData/IntroData";

export const Intro = () => {
  return (
    <>
      <div className="introContainer">
        <div className="content"></div>
      </div>
      <IntroData />
    </>
  );
};
