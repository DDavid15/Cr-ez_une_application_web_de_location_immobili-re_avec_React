import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <div className="card__image-wrapper">
        <img
          src={logement.cover}
          alt={logement.title}
          className="card__image"
        />
        <div className="card__overlay" />
        <h2 className="card__title">{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Card;
