// src/components/Carousel.jsx
import { useState } from "react";
import Arrow from "../assets/arrow-forward-ios.svg";

function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`${title} ${currentIndex + 1}`}
        className="carousel__image"
      />

      {pictures.length > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          >
            <img src={Arrow} alt="Précédent" />
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          >
            <img src={Arrow} alt="Suivant" />
          </button>

          <div className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
