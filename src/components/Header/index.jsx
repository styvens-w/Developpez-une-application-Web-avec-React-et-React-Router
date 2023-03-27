import '../../styles/Header.css';
import logo from '../../assets/logo.svg';
import Navbar from '../Navbar';
import React from 'react';
import Logo from '../Logo';

function Header() {
  return (
    <header className="header">
      <Logo logo={logo} />
      <Navbar />
    </header>
  );
}

export default Header;
