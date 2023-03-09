import '../../styles/Header/Header.css';
import logo from '../../assets/logo.svg';
import Navbar from './Navbar';
import React from 'react';
function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo kasa" />
      <Navbar />
    </header>
  );
}

export default Header;
