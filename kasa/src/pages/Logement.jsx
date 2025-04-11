import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();

  // Utilise 'id' pour charger les données du logement
  return <div>Logement ID: {id}</div>;
}

export default Logement;
