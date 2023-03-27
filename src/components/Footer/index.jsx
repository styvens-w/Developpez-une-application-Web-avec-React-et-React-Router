import '../../styles/Footer.css';
import logo from '../../assets/logoF.svg';
import React from 'react';
import Logo from '../Logo';
import Copyright from '../Copyright';

function Footer() {
  return (
    <footer className="footer">
      <Logo logo={logo} />
      <Copyright />
    </footer>
  );
}

export default Footer;
