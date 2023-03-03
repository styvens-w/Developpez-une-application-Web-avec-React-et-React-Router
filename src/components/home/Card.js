import '../../styles/home/Card.css';

function Card({ id, title, cover }) {
      return (
            <article key={id} className="card">
                  <img src={cover} className="card-image" alt={title} />
                  <p className="card-text">{title}</p>
            </article>
      );
}

export default Card;