import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <header className="header">
    <img className='header-logo' src="https://insideupgames.com/wp-content/uploads/2018/01/icon-IUG.png" alt="" />
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#get-started" className="header__button">Get Started</a></li>
        </ul>
      </nav>
      <button
        className="header__burger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
