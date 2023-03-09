import '../../styles/Footer/Footer.css';
import logoF from '../../assets/logoF.svg';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <img src={logoF} className="footer-logo" alt="logo kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
