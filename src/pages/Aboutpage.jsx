import React from 'react';

import brewdogabout from '../assets/brewdog-about.jpg';

const Aboutpage = () => {
  return (
    <div className='about'>
      <div className='brewdog-app-img'>
        <img src={brewdogabout} alt='brewdog-app' />
      </div>
      <h3>BREWDOG COMPANY INFORMATION</h3>
      <p>
        BrewDog PLC.
        <br />
        <br />
        Company No: SC311560
        <br />
        <br />
        VAT No: 897 6381 54
        <br />
        <br />
        Registered Office in Scotland at BrewDog,
        <br />
        <br />
        Balmacassie Commercial Park, Ellon,
        <br />
        <br />
        Aberdeenshire, AB41 8BX
      </p>
    </div>
  );
};

export default Aboutpage;
