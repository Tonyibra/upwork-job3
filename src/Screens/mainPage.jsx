import "../styles/mainPage.scss";
import { Intro } from "../Components/MainPage/Intro/Intro";
import { Topbar } from "../Components/MainPage/Topbar/Topbar";

const mainPage = () => {
  return (
    <div>
      <div className="topbarOverlay">
        <Topbar />
      </div>
      <div className="introOverlay">
        <Intro />
      </div>
    </div>
  );
};

export default mainPage;
