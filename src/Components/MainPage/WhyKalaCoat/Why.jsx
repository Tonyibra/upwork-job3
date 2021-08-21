import "./Why.scss";
import { WhyCard } from "./WhyCard/WhyCard";
import { data } from "./Data/WhyData";
export const Why = () => {
  return (
    <div className="whyContainer" id="whyus">
      <div className="whyHeader">
        <div className="whyTitle">
          <span>why kalacoat</span>
        </div>
        <div className="whySubtitle">
          <h2>Notarized Rent Agreement Kolkata for Rs.300/-</h2>
        </div>
      </div>
      <div className="whyBody">
        <div className="whyList">
          {data?.map((data) => (
            <WhyCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
