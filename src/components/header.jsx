import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/kasa-logo.png" alt="Kasa" />
        </Link>
      </div>
      <nav className="header__nav">
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
