import fullStar from "../assets/star-full.svg";
import emptyStar from "../assets/star-empty.svg";

function Rating({ value }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= value ? fullStar : emptyStar}
        alt={i <= value ? "Étoile remplie" : "Étoile vide"}
        className="rating__star"
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
