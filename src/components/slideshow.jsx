import { useState } from 'react';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // si moins de 2 images pas de carrousel
  if (pictures.length <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow__img" />
      </div>
    );
  }

  const goToPrevious = () => {
    // back sur premiere image -> go à la dernière
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    // next sur dernière image -> go à la première
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Vue du logement ${index + 1}`}
            className={`slideshow__img ${index === currentIndex ? 'slideshow__img--active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          />
        ))}
      </div>

      <button
        className="slideshow__arrow slideshow__arrow--left"
        onClick={goToPrevious}
        aria-label="Image précédente"
      >
        <img src="/arrow.svg" alt="Précédent" />
      </button>

      <button
        className="slideshow__arrow slideshow__arrow--right"
        onClick={goToNext}
        aria-label="Image suivante"
      >
        <img src="/arrow.svg" alt="Suivant" />
      </button>

      <div className="slideshow__counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
