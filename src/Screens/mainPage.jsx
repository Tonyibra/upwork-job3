import "../styles/mainPage.scss";
import { Intro } from "../Components/MainPage/Intro/Intro";
import { Topbar } from "../Components/MainPage/Topbar/Topbar";
import { WorksPage } from "../Components/MainPage/HowItWorks/WorksPage";

const mainPage = () => {
  return (
    <div>
      <div className="topbarOverlay">
        <Topbar />
      </div>
      <div className="introOverlay">
        <Intro />
        <WorksPage />
      </div>
    </div>
  );
};

export default mainPage;
