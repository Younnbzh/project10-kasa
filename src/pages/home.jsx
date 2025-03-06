import { useEffect, useState } from 'react';
import Banner from '../components/banner';
import Card from '../components/card';
import logements from '../data/logements.json';

function Home() {
  const [properties, setProperties] = useState([]);

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
