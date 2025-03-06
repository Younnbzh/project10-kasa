import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slideshow from '../components/slideshow';
import logements from '../data/logements.json';
import Collapse from '../components/collapse';

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  
  useEffect(() => {
    const currentLogement = logements.find(item => item.id === id);
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
      const starClass = i <= score ? 'housing__star--filled' : 'housing__star--empty';
      
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
            
            <div className="housing__tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="housing__tag">{tag}</span>
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
        
        <div className="housing__details">
          <div className="housing__collapse">
            <Collapse 
              title="Description" 
              content={logement.description} 
            />
          </div>
          <div className="housing__collapse">
            <Collapse 
              title="Équipements" 
              content={logement.equipments} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Housing;