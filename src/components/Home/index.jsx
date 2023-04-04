import React from 'react';
import Banner from '../Banner';
import bannerHome from '../../assets/bannerHome.png';
import Cards from '../Cards';

function HomeIndex() {
  return (
    <React.Fragment>
      {/*
      On appel le composant Banner en passant les props img et text.
      Les props sont des objets que l'on peut récupérer dans les paramètres de notre composant fonction.
      On utilise des guillemets pour les string et des accolades pour tout le reste.
      */}
      <Banner img={bannerHome} text="Chez vous, partout et ailleurs" />
      {/* On appel le composant Cards */}
      <Cards />
    </React.Fragment>
  );
}

export default HomeIndex;
