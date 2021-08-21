import React, { useState } from "react";
import "../styles/mainPage.scss";
import { Intro } from "../Components/MainPage/Intro/Intro";
import { Topbar } from "../Components/MainPage/Topbar/Topbar";
import { WorksPage } from "../Components/MainPage/HowItWorks/WorksPage";
import { Testimonials } from "../Components/MainPage/Testimonials/Testimonials";
import Why from "../Components/MainPage/WhyKalaCoat/Why";
import { Services } from "../Components/MainPage/Services/Services";
import { Faq } from "../Components/MainPage/FAQ/Faq";

const MainPage = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div>
      <div className={"topbarOverlay " + (colorChange && "white")}>
        <Topbar colorChange={colorChange} />
      </div>
      <div className="introOverlay">
        <Intro />
        <WorksPage />
        <Testimonials />
        <Why />
        <Services />
        <Faq />
      </div>
    </div>
  );
};
export default MainPage;
