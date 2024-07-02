import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">MyApp</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
      </nav>
    </header>
  );
};

export default Header;
