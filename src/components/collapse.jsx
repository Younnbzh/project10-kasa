import { useState } from 'react';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--up' : 'collapse__arrow--down'}`}>
          <img src="/arrow.svg" alt="Flèche" />
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--visible' : ''}`}>
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;