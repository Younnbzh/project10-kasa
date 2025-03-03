import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/kasa-logo.png" alt="Kasa" />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">Accueil</Link>
        <Link to="/about" className="header__nav-link">À Propos</Link>
      </nav>
    </header>
  );
}

export default Header;