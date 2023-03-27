import '../../styles/Carrousel.css';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import React, { useState } from 'react';

function Carrousel({ pictures, title }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextPict = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevPict = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carrousel">
      {length > 1 && (
        <React.Fragment>
          <img
            src={arrowLeft}
            alt="précédent"
            className="arrowLeft"
            onClick={prevPict}
          />
          <img
            src={arrowRight}
            alt="suivant"
            className="arrowRight"
            onClick={nextPict}
          />
          <p className="compteur-images">{`${current + 1}/${length}`}</p>
        </React.Fragment>
      )}

      {pictures.map((pict, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && (
              <img
                src={pict}
                alt={`${title}-${current + 1}`}
                className="carrousel-image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
