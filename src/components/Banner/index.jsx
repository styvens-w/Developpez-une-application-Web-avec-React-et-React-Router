import React from 'react';
import '../../styles/Banner.css';

function Banner({ img, text }) {
  return (
    <section className="banner">
      <img src={img} alt="paysage" />
      {text ? <figcaption className="slogan">{text}</figcaption> : null}
    </section>
  );
}

export default Banner;
