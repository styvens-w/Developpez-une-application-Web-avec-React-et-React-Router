import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../datas/logements.json';
import Carrousel from '../Carrousel';
import Info from '../Info';
import Error from '../../pages/Error';

function HousingIndex() {
  const { idLogement } = useParams();
  const logement = logements.find(({ id }) => id === idLogement);

  if (!logement) {
    return <Error />;
  } else {
    return (
      <React.Fragment>
        <Carrousel pictures={logement.pictures} title={logement.title} />
        <Info
          id={logement.id}
          title={logement.title}
          host={logement.host}
          location={logement.location}
          rating={logement.rating}
          tags={logement.tags}
          description={logement.description}
          equipments={logement.equipments}
        />
      </React.Fragment>
    );
  }
}

export default HousingIndex;
