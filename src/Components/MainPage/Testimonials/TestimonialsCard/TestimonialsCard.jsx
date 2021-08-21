import "./TestimonialsCard.scss";
import StarIcon from "../TestimonialsData/assets/star.png";
import Quote from "../TestimonialsData/assets/quote.svg";
export const TestimonialsCard = ({ rating, name, image, comment }) => {
  const getReviews = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      const item = stars[i];
      stars.push(
        <li key={i} style={{ display: "flex" }}>
          <img style={{ width: 20, height: 20 }} src={StarIcon} />
        </li>
      );
    }
    return stars;
  };

  return (
    <div className="testCard">
      <div className="rating">
        <ul>{getReviews(rating)}</ul>
      </div>
      <div className="comment">
        <p>{comment}</p>
      </div>
      <div className="footer">
        <div className="hero">
          <img src={image} alt="hero" />
        </div>
        <div className="fullName">
          <strong>{name}</strong>
          <div>
          <img src={Quote} />
        </div>
        </div>
      </div>
    </div>
  );
};
