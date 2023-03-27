import React from 'react';
import Banner from '../Banner';
import bannerHome from '../../assets/bannerHome.png';
import Cards from '../Cards';

function HomeIndex() {
  return (
    <React.Fragment>
      <Banner img={bannerHome} text="Chez vous, partout et ailleurs" />
      <Cards />
    </React.Fragment>
  );
}

export default HomeIndex;
