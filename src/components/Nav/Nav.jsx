import React from 'react';
import logo from '../../assets/logo.png';
import './Nav.css';
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo}></img>
        <p className="flash-logo-text">FLASHTYPE</p>
      </div>
      <div className="nav-right">
        <a href="https://rohan2804.netlify.app/" className="nav-pro-link" target="_blank">
          PROFILE
        </a>
      </div>
    </div>
  );
};
export default Nav;
