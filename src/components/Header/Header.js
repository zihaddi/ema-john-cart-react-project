import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
  return (
    <div className='header-design'>
      <img  src={logo} alt="" />
      <div className='nav-design'>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        
      </div>
    </div>
  );
};

export default Header;

