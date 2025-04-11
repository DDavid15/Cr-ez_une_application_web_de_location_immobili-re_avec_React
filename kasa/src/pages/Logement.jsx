import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import NotFound from "./NotFound";

function Logement() {
  const { id } = useParams();

  // Recherche du logement par ID
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="logement">
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Tu peux ajouter carrousel, tags, hôte, rating, etc. ici */}
    </div>
  );
}

export default Logement;
