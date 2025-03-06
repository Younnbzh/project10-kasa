function Footer() {
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
