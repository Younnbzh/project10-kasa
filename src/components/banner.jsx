function Banner({ image, title, alt }) {
  return (
    <div className="banner">
      <img src={image} alt={alt || 'Banner'} className="banner__img" />
      <div className="banner__overlay"></div>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}

export default Banner;
