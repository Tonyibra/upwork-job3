import "./Works.scss";
import { WorksCard } from "./WorksCard/WorksCard";
import { data } from "./WorksData";
export const WorksPage = () => {
  return (
    <div className="worksPageContainer" id="works">
      <div className="workHeader">
        <div className="worksTitle">
          <span>HOW IT WORKS</span>
        </div>
        <div className="worksSubTitle">
          <span>Just 3 Simple Steps</span>
        </div>
        <div className="worksCard">
          {data?.map(({ img, title, content, id }) => {
            return (
              <WorksCard key={id} img={img} title={title} content={content} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
