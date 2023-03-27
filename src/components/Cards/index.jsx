import '../../styles/Cards.css';
import Card from '../Card';
import logements from '../../datas/logements.json';
import React from 'react';

function Cards() {
  return (
    <section className="cards">
      {logements.map(({ id, cover, title }) => (
        <Card key={id} id={id} cover={cover} title={title} />
      ))}
    </section>
  );
}

export default Cards;
