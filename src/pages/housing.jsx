// Importation des hooks React nécessaires
import { useParams } from 'react-router-dom'; // Pour accéder aux paramètres de l'URL
import { useEffect, useState } from 'react';
// Importation des composants utilisés dans la page
import Slideshow from '../components/slideshow';
import Collapse from '../components/collapse';
// Importation des données de logements
import logements from '../data/logements.json';
/**
 * Composant Housing - Page de détail d'un logement
 * Affiche les informations détaillées d'un logement spécifique et récupère l'ID du logement depuis l'URL et charge les données correspondantes.
 */
function Housing() {
  // Extraction de l'ID du logement depuis l'URL
  const { id } = useParams();
  // Données du logement actuel
  const [logement, setLogement] = useState(null);
  // Recherche le logement correspondant à l'ID dans le json et les stocke
  useEffect(() => {
    const currentLogement = logements.find((item) => item.id === id);
    setLogement(currentLogement);
  }, [id]);

  if (!logement) {
    return null;
  }

  // étoiles
  const renderRating = (score) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      const starClass =
        i <= score ? 'housing__star--filled' : 'housing__star--empty';

      stars.push(
        <span key={i} className={`housing__star ${starClass}`}>
          <img src="/star.svg" alt="étoile" />
        </span>
      );
    }

    return <div className="housing__rating">{stars}</div>;
  };

  return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />

      <div className="housing__content">
        <div className="housing__main-info">
          <div className="housing__title-location">
            <h1 className="housing__title">{logement.title}</h1>
            <p className="housing__location">{logement.location}</p>
            {/* Liste des tags */}
            <div className="housing__tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="housing__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="housing__host-rating">
            {/* Affichage de l'hôte */}
            <div className="housing__host">
              <div className="housing__host-name">
                <p>{logement.host.name.split(' ')[0]}</p>
                <p>{logement.host.name.split(' ')[1]}</p>
              </div>
              <div className="housing__host-picture">
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
            </div>

            {/* Affichage de la notation */}
            {renderRating(parseInt(logement.rating))}
          </div>
        </div>
        {/* Description et équipements */}
        <div className="housing__details">
          <div className="housing__collapse">
            <Collapse title="Description" content={logement.description} />
          </div>
          <div className="housing__collapse">
            <Collapse title="Équipements" content={logement.equipments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Housing;
