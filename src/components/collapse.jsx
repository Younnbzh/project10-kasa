// Importation du hook useState pour gérer l'état local du composant
import { useState } from 'react';

/**
 * Composant Collapse - Crée un élément déroulant/accordéon
 * @param title - Le titre affiché dans la barre du collapse
 * @param content - Le contenu à afficher 
 */
function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  // Basculer l'état d'ouverture/fermeture du collapse (inverse l'état actuel)
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--up' : 'collapse__arrow--down'}`}
        >
          <img src="/arrow.svg" alt="Flèche" />
        </span>
      </button>
      <div
        className={`collapse__content ${isOpen ? 'collapse__content--visible' : ''}`}
      >
        {/* 
          Affichage conditionnel basé sur le type de contenu:
          - Si c'est une chaîne, l'afficher comme paragraphe
          - Si c'est un tableau, créer une liste de points
        */}
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
