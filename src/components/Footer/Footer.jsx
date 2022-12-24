import React from 'react';
import { Link } from 'react-router-dom';

import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import twitter from '../../assets/twitter.svg';
import untapped from '../../assets/untapped.webp';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='black-line'></div>
      <div className='wrapper'>
        <div className='pages'>
          <div>
            <Link to='/about'>Company Information</Link>
          </div>
          <div>
            <Link to='/app'>BrewDog App</Link>
          </div>
        </div>
        <div className='copyright'>
          <p>NON-COMMERCIAL PROJECT</p>{' '}
          <p>
            {' '}
            <span>GitHub:</span>{' '}
            <a href='https://github.com/targonskii'>targonskii</a>
          </p>{' '}
          <p>2022</p>
        </div>
        <div className='follow'>
          <p>Follow us</p>
          <div className='socialnet'>
            <a href='https://www.facebook.com/brewdogofficial/'>
              <img src={facebook} alt='facebook' />
            </a>
            <a href='https://www.youtube.com/user/BrewDogBeer'>
              <img src={youtube} alt='youtube' />
            </a>
            <a href='https://www.instagram.com/brewdogofficial/?hl=en'>
              <img src={instagram} alt='instagram' />
            </a>
            <a href='https://twitter.com/brewdog'>
              <img src={twitter} alt='twitter' />
            </a>
            <a href='https://untappd.com/brewdogbrewery'>
              <img src={untapped} alt='untapped' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
