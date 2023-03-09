import React from 'react';
import '../styles/Home/Home.css';
import Slogan from '../components/Home/Slogan';
import Cards from '../components/Home/Cards';

function Home() {
  return (
    <main className="main-home">
      <Slogan />
      <Cards />
    </main>
  );
}

export default Home;
