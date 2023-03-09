import '../../styles/Housing/Carrousel.css';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';

function Carrousel({ pictures, title }) {
  return (
    <section className="carrousel">
      <img className="arrowLeft" src={arrowLeft} alt="précédente" />
      {pictures.map((picture, index) => (
        <img
          className="carrousel-image"
          key={index}
          src={picture}
          alt={`carrousel de ${title}`}
        />
      ))}
      <img className="arrowRight" src={arrowRight} alt="suivante" />
    </section>
  );
}

export default Carrousel;
