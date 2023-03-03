import React from 'react';
import slogan from '../../assets/slogan.png';
import '../../styles/home/Slogan.css';

function Slogan() {
  return (
    <figure className="slogan">
      <img src={slogan} className="slogan-image" alt="slogan.jpg" />
      <figcaption className="slogan-text">
        Chez vous, partout et ailleurs
      </figcaption>
    </figure>
  );
}

export default Slogan;
