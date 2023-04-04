import '../../styles/Carrousel.css';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import React, { useState } from 'react';

function Carrousel({ pictures, title }) {
  // On appel useState au niveau supérieur de son composant pour déclarer une variable d'état.
  // useState renvoie un tableau avec deux valeurs:
  // - L'état actuel (current) qui correspond à la valeur initial passé à useState (0).
  // - La fonction set (setCurrent) qui permet de mettre à jour l'état à une valeur différente et de déclencher un nouveau rendu.
  const [current, setCurrent] = useState(0);

  // On récupère la longeur du tableau (picture)
  const length = pictures.length;

  // On crée une fonction fléchée qui mettra à jour l'useState précédemment créer.
  const nextPict = () => {
    // On met à jour l'useState en utilisant la fonction set (setCurrent) qui prendra entre parenthése la nouvelle valeur
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevPict = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carrousel">
      {/* S'il y a plus d'une image, on affiche ce contenu */}
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

      {/* On utilise la méthode map() pour créer un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant */}
      {pictures.map((pict, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slide active' : 'slide'}
          >
            {/* Si l'index de l'image correspond à la valeur de l'useState, on l'affiche */}
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
