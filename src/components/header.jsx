// Importation des composants de routing de React Router
import { Link, NavLink } from 'react-router-dom';
/**
 * Composant Header - En-tête de l'application
 * Affiche le logo Kasa et la navigation principale.
 */
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        {/* 
        Utilisation de Link au lieu de <a> pour éviter le rechargement complet de la page
      */}
        <Link to="/">
          <img src="/kasa-logo.png" alt="Kasa" />
        </Link>
      </div>
      <nav className="header__nav">
        {/* 
          NavLink détecte si le lien est actif + applique header__nav-link--active si actif
        */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'header__nav-link header__nav-link--active'
              : 'header__nav-link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'header__nav-link header__nav-link--active'
              : 'header__nav-link'
          }
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
