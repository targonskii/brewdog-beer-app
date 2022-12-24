import React from 'react';
import brewdogapp from '../assets/brewdog-app.png';

const Brewdogapp = () => {
  return (
    <div className='brewdog-app'>
      <div className='brewdog-app-img'>
        <img src={brewdogapp} alt='brewdog-app' />
      </div>
      <h3>THE BREWDOG APP</h3>
      <br />
      <p>BAR, TAP-LISTS AND DISCOUNTS.</p>
      <br />
      <p>
        Download the BrewDog app to find your nearest bar, access your Equity
        for Punks discount card, and see what's on tap with Untappd ratings and
        more.
      </p>
      <div className='link-app'>
        <div>
          <a href='https://apps.apple.com/gb/app/brewdog/id1291946531'>
            Download for iOS
          </a>
        </div>
        <div>
          <a href='https://play.google.com/store/apps/details?id=com.barsapp&hl=en_GB'>
            Download for Android
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brewdogapp;
