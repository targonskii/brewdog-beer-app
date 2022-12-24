import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import BeerCard from '../BeerCard/BeerCard';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const beersListFetched = () => {
    Axios.get('https://api.punkapi.com/v2/beers')
      .then((res) => res)
      .then((beers) => setBeers(beers.data));
  };
  useEffect(() => beersListFetched(), []);
  return (
    <div className='beers'>
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer.id} />
      ))}
    </div>
  );
};

export default Beers;
