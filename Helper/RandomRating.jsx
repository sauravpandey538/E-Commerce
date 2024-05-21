import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Calculate the remainder for the half star
  const remainder = rating - fullStars;

  // Render full stars
  const fullStarElements = Array.from({ length: fullStars }, (_, index) => (
    <FaStar key={index} />
  ));

  // Render half star if needed
  const halfStarElement = remainder >= 0.5 && <FaStarHalfAlt />;

  // Render empty stars
  const emptyStarElements = Array.from(
    { length: 5 - fullStars - (remainder >= 0.5 ? 1 : 0) },
    (_, index) => <FaRegStar key={index + fullStars + 1} />
  );

  return (
    <div style={{ display: "flex" }}>
      {fullStarElements}
      {halfStarElement}
      {emptyStarElements}
    </div>
  );
};

export default StarRating;
