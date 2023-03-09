import '../../styles/Home/Cards.css';
import logements from '../../datas/logements.json';
import Card from './Card';

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
