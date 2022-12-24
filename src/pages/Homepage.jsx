import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BeerCard from '../components/BeerCard/BeerCard';

const Homepage = () => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios
        .get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=18`)
        .then((res) => {
          setBeers([...beers, ...res.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, beers, currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      beers.length <= 325
    ) {
      setFetching(true);
    }
  };
  return (
    <>
      <div className='beers'>
        {beers.map((beer) => (
          <Link key={beer.id} to={`/beer/${beer.id}`}>
            <BeerCard beer={beer} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Homepage;
