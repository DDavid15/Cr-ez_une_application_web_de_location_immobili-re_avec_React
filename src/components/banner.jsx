function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__img" />
      <div className="banner__overlay" />
      {title && <h1 className="banner__text">{title}</h1>}
    </div>
  );
}

export default Banner;
