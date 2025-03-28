// Importation du composant Link de React Router pour la navigation sans rechargement
import { Link } from 'react-router-dom';
/**
 * Composant Error - Page d'erreur 404
 */
function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
