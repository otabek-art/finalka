import React, { useState } from 'react';
import './Header.scss';
import Home from '../../pages/Home';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <header className="header">
    <img className='header-logo' src="https://insideupgames.com/wp-content/uploads/2018/01/icon-IUG.png" alt="" />
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/get-started" className="header__button">Get Started</Link>
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
