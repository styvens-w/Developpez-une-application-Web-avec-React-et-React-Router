import React from 'react';
import Banner from '../Banner';
import bannerAbout from '../../assets/bannerAbout.png';
import Collapse from '../Collapse';
import abouts from '../../datas/abouts.json';
import '../../styles/Collapse.css';

function AboutIndex() {
  return (
    <React.Fragment>
      <Banner img={bannerAbout} />

      <section className="collapses">
        {abouts.map(({ title, description }) => (
          <Collapse key={title} button={title} text={description} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default AboutIndex;
