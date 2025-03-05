import { useParams } from 'react-router-dom';
import Slideshow from '../components/slideshow';
import logements from '../data/logements.json';

function Housing() {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id);
  
  return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
    </div>
  );
}

export default Housing;