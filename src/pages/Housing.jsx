import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';
import Carrousel from '../components/Housing/Carrousel';
import '../styles/Housing/Housing.css';

function Housing() {
  const { idLogement } = useParams();

  return logements.map(
    ({
      id,
      title,
      pictures,
      description,
      host,
      rating,
      location,
      equipements,
      tags,
      // eslint-disable-next-line array-callback-return
    }) => {
      if (id === idLogement) {
        return (
          <main key={id} className="main-housing">
            <Carrousel key={title} pictures={pictures} title={title} />
          </main>
        );
      }
    }
  );
}

export default Housing;
