// Importation du hook useState pour gérer l'état local du carrousel
import { useState } from 'react';
/**
 * Composant Slideshow - Carrousel d'images
 * Affiche une galerie d'images avec navigation.
 * @param pictures - Tableau des images à afficher
 */
function Slideshow({ pictures }) {
  // État pour suivre l'index de l'image actuellement affichée
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
        {/* 
          Mapping sur toutes les images pour les pré-charger, chaque image est positionnée à l'aide de translateX
        */}
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
      {/* Bouton de navigation vers l'image précédente */}
      <button
        className="slideshow__arrow slideshow__arrow--left"
        onClick={goToPrevious}
        aria-label="Image précédente"
      >
        <img src="/arrow.svg" alt="Précédent" />
      </button>
      {/* Bouton de navigation vers l'image suivante */}
      <button
        className="slideshow__arrow slideshow__arrow--right"
        onClick={goToNext}
        aria-label="Image suivante"
      >
        <img src="/arrow.svg" alt="Suivant" />
      </button>
      {/* Compteur d'images (position actuelle / total) */}
      <div className="slideshow__counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
