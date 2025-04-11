import { useEffect, useState } from "react";
import Banner from "../components/banner";
import bannerHome from "../assets/banner-home.svg";
import Card from "../components/card";
import logements from "../data/logements.json";

function Home() {
  const [displayedCards, setDisplayedCards] = useState([]);

  // Fonction pour déterminer le nombre de cards à afficher selon la taille de l'écran
  const updateDisplayedCards = () => {
    const isMobile = window.innerWidth <= 768;
    const cardsToShow = isMobile ? 3 : 6;
    setDisplayedCards(logements.slice(0, cardsToShow));
  };

  useEffect(() => {
    updateDisplayedCards();
    window.addEventListener("resize", updateDisplayedCards);
    return () => window.removeEventListener("resize", updateDisplayedCards);
  }, []);

  return (
    <div className="home">
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {displayedCards.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}

export default Home;
