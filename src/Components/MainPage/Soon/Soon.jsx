import React from "react";
import "./Soon.scss";
import { SoonCard } from "./SoonCard/SoonCard";
export const Soon = () => {
  return (
    <div className="soonWrapper" id="soon">
      <div className="overlay">
        <div className="content"></div>
      </div>
      <div className="soonContent">
        <div className="soonHeader">
          <div className="soonTitle">
            <span>Coming Soon</span>
          </div>
          <div className="soonSubtitle">
            <span>Upcoming Services for Our Valuable Customers</span>
          </div>
        </div>
        <div className="cardList">
          <SoonCard />
        </div>
      </div>
    </div>
  );
};
