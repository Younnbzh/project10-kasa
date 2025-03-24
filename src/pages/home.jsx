// Importation des hooks React nécessaires
import { useEffect, useState } from 'react';
// Importation des composants utilisés dans la page
import Banner from '../components/banner';
import Card from '../components/card';
// Importation des données de logements
import logements from '../data/logements.json';
/**
 * Composant Home - Page d'accueil
 * Affiche une bannière et une galerie de cartes représentant les différentslogements disponibles sur la plateforme.
 */
function Home() {
  // Données de la liste des logements
  const [properties, setProperties] = useState([]);
  // Charge les données de logements depuis le json et les stocke
  useEffect(() => {
    setProperties(logements);
  }, []);

  return (
    <div className="home">
      <Banner
        image="/fond.jpg"
        title="Chez vous, partout et ailleurs"
        alt="Paysage côtier"
      />
      {/* 
          Mapping sur l'array des logements génération d'une Card avec ses propriétés
        */}
      <div className="home__gallery">
        {properties.map((property) => (
          <Card
            key={property.id}
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
