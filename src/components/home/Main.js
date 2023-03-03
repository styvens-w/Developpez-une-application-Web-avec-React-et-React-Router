import '../../styles/home/Main.css';
import React from 'react';
import Slogan from './Slogan';
import Cards from './Cards';

function Main() {
      return (
            <main className="main">
                  <Slogan />
                  <Cards />
            </main>
      );
}

export default Main;