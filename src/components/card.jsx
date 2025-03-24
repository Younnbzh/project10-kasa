// Importation du composant Link de React Router pour la navigation
import { Link } from 'react-router-dom';
/**
 * Composant Card - Carte de présentation d'un logement
 * @param id - Identifiant unique du logement
 * @param title - Titre du logement
 * @param cover - URL de l'image de couverture
 */
function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      {/* 
        Overlay semi-transparent qui améliore la lisibilité du titre
      */}
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </Link>
  );
}

export default Card;
