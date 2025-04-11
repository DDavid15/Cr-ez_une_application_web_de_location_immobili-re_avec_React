import bannerImg from "../assets/banner-home.svg";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Bannière paysage" className="banner__img" />
      <div className="banner__overlay" />
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
