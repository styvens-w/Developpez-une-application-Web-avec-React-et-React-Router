import '../../styles/Card.css';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logements/${id}`}>
        <img src={cover} className="card-image" alt={title} />
        <p className="card-text">{title}</p>
      </Link>
    </article>
  );
}

export default Card;
