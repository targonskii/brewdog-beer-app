import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpeg';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='black-line'></div>
      </div>
    </>
  );
};

export default Header;
