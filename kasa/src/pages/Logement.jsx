import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";

import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

import "../styles/pages/_logement.scss";

function Logement() {
  const { id } = useParams();
  const data = logements.find((logement) => logement.id === id);

  if (!data) return <Navigate to="/404" />;

  const {
    title,
    location,
    pictures,
    tags,
    host,
    rating,
    description,
    equipments,
  } = data;

  return (
    <>
      <Carousel pictures={pictures} title={title} />

      <div className="logement__header">
        <div className="logement__infos">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>
          <div className="logement__tags">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">{host.name}</p>
            <img
              className="logement__host-picture"
              src={host.picture}
              alt={`Portrait de ${host.name}`}
            />
          </div>
          <Rating value={parseInt(rating)} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">{description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}

export default Logement;
