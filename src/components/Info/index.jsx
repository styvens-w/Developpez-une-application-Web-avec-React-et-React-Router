import '../../styles/Info.css';
import React from 'react';
import Title from '../Title';
import Location from '../Location';
import Tags from '../Tags';
import Host from '../Host';
import Rating from '../Rating';
import Collapse from '../Collapse';

function Info({
  id,
  title,
  host,
  location,
  rating,
  tags,
  description,
  equipments,
}) {
  console.log(equipments);
  console.log(description);
  return (
    <section key={id} className="info">
      <div className="title">
        <Title title={title} />
        <Location location={location} />
        <Tags tags={tags} />
      </div>

      <div className="host">
        <Host host={host} />
        <Rating rating={rating} />
      </div>

      <Collapse button="Description" text={description} />
      <Collapse button="Équipements" text={equipments} />
    </section>
  );
}

export default Info;
