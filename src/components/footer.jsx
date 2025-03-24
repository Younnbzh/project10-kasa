/**
 * Composant Footer - Pied de page de l'application
 * Affiche le logo Kasa en blanc et un message de copyright avec l'année actuelle.
 */
function Footer() {
  // on stocke l'année actuelle dans une variable
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/kasa-logo-white.png" alt="Kasa" />
      </div>
      <p className="footer__text">© {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
