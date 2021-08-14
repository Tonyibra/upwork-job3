import "./Works.scss";
import Edit from "../../imgs/edit-icon.png";
import Euro from "../../imgs/euro-icon.png";
import Home from "../../imgs/home-icon.png";
import Smile from "../../imgs/smile-icon.png";
import { Card } from "../Card/Card";
import { useMediaQuery } from "react-responsive";

export const Works = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="Listcontainer">
      <div className={isMobile ? "list" : "desktopList"}>
        {isMobile ? (
          <>
            <Card src={Home} payload="WE GENERATE YOUR E-TENANCY" />
            <Card src={Smile} payload="YOU ADD TENANTS" />
            <Card src={Edit} payload="EVERYONE E-SIGNS IT" />
            <Card src={Euro} payload="WE SORT DEPOSIT & RENT COLLECTION" />
          </>
        ) : (
          <>
            <Card />
          </>
        )}
      </div>
    </div>
  );
};
