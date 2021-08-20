import "./WorksCard.scss";

export const WorksCard = ({ img, title, content }) => {
  return (
    <div className="worksCardContainer">
      <div className="worksCardImageContainer">
        <div className="worksCardImage">
          <img src={img} />
        </div>
      </div>
      <div className="worksCardText">
        <h3>{title}</h3>
      </div>
      <div className="worksCardDesc">
        <p>{content}</p>
      </div>
    </div>
  );
};
