import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/layout/Banner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import logo from './assets/logo.svg';
import logoF from './assets/logoF.svg';
import './styles/index.css';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Banner>
      <img src={logo} className="header-logo" alt="logo kasa" />
      <Navbar />
    </Banner>

    <Home />

    <Footer>
      <img src={logoF} className="footer-logo" alt="logo kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </Footer>
  </React.StrictMode>
);
