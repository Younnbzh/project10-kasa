/**
 * Composant Banner - Bannière d'en-tête avec image
 * @param image - URL de l'image de fond
 * @param title - Texte du titre à afficher (optionnel)
 * @param alt - Texte alternatif pour l'image (pour accessibilité)
 */
function Banner({ image, title, alt }) {
  return (
    <div className="banner">
      <img src={image} alt={alt || 'Banner'} className="banner__img" />
      {/* 
        Overlay semi-transparent pour assurer la lisibilité du texte et créer un contraste avec l'image
      */}
      <div className="banner__overlay"></div>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}

export default Banner;
