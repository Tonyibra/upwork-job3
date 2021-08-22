import "./SoonCard.scss";
import User from "../assets/user.svg";
import Calendar from "../assets/calendar.svg";
import File from "../assets/file.svg";
export const SoonCard = () => {
  return (
    <div className="sooncardContainer">
      <div className="card1">
        <div className="cardHeader">
          <img src={User} alt="userIcon" />
        </div>
        <div className="cardTitle">
          <span>Customer Account</span>
        </div>
        <div className="cardDesc">
          <p>
            Customers will have their own account on our website and they will
            be able to access all their agreement history.
          </p>
        </div>
      </div>
      <div className="card2">
        <div className="cardHeader">
          <img src={Calendar} alt="userIcon" />
        </div>
        <div className="cardTitle">
          <span>Online Auto Renewal</span>
        </div>
        <div className="cardDesc">
          <p>Customers will be able to auto-renew agreements online.</p>
        </div>
      </div>
      <div className="card1">
        <div className="cardHeader">
          <img src={File} alt="userIcon" />
        </div>
        <div className="cardTitle">
          <span>Scan Copy of Agreement</span>
        </div>
        <div className="cardDesc">
          <p>Scan copy of the Agreement will be available for a lifetime.</p>
        </div>
      </div>
    </div>
  );
};
