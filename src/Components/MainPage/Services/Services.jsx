import "./Services.scss";
import { data } from "./Data/List";
import { workList } from "./Data/WorkList";
export const Services = () => {
  return (
    <div className="servicesContainer" id="services">
      <div className="servicesHeader">
        <div className="servicesTitle">
          <span>OUR SERVICES</span>
        </div>
        <div className="servicesSubtitle">
          <h2>What We Offer</h2>
        </div>
      </div>
      <div className="servicesBody">
        <ul>
          {data?.map(({ image, title }, idx) => (
            <li key={idx.toString()}>
              <img src={image} alt="" />
              <span>{title}</span>
            </li>
          ))}
        </ul>
        <div className="serviceBodyRight">
          <div className="serviceBodyRightTitle">
            <span>Any Kind of Affidavit Work</span>
          </div>
          <div className="list">
            <ul>
              {workList.map(({ title }, idx) => (
                <li key={idx}>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
