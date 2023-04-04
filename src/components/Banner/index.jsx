import React from 'react';
import '../../styles/Banner.css';

// On récupère les props dans les paramètres de la fonction qui définit notre composant
function Banner({ img, text }) {
  return (
    <section className="banner">
      <img src={img} alt="paysage" />

      {/* Si on a passer un prop pour le text, on l'affiche, sinon on affiche rien */}
      {text ? <figcaption className="slogan">{text}</figcaption> : null}
    </section>
  );
}

export default Banner;
