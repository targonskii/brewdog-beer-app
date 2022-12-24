import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className='beer-card'>
      <img src={beer.image_url} alt='beer-img' />
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
    </div>
  );
};

export default BeerCard;
