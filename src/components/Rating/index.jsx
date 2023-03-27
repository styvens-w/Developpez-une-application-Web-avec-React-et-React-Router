import '../../styles/Rating.css';
import starFull from '../../assets/starFull.svg';
import starEmpt from '../../assets/starEmpt.svg';
import React from 'react';

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img
            key={`star-${rangeElem}`}
            src={starFull}
            alt={`Étoile-${rangeElem}`}
          />
        ) : (
          <img
            key={`star-${rangeElem}`}
            src={starEmpt}
            alt={`Étoile-${rangeElem}`}
          />
        )
      )}
    </div>
  );
}

export default Rating;
