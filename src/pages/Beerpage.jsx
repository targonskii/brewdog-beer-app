import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Beerpage = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((beer) => setBeer(beer.data));
  }, [id]);

  return (
    <>
      {beer.map((beer, index) => (
        <div className='beerpage' key={index}>
          <div className='img-beer'>
            <img src={beer.image_url} alt='beer-img' />
          </div>
          <div className='description-beer'>
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>
              <span>Description:</span> {beer.description}
            </p>
            <p>
              <span>ABV:</span>{' '}
              {beer.abv ? <span>{beer.abv}%</span> : <span>Unknown</span>}
            </p>
            <p>
              <span>IBU:</span>{' '}
              {beer.ibu ? <span>{beer.ibu}</span> : <span>Unknown</span>}
            </p>
            <p>
              <span>Food pairing:</span>
              {beer.food_pairing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Beerpage;
