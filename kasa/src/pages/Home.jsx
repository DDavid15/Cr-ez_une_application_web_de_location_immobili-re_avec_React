import Banner from "../components/banner";
import bannerHome from "../assets/banner-home.svg";
import Card from "../components/card";
import logements from "../data/logements.json";

function Home() {
  return (
    <>
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </>
  );
}

export default Home;
