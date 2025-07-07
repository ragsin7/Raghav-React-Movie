import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Image_Base_URL = 'https://image.tmdb.org/t/p/w500';

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies()
      .then((resp) => {
        console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
      .catch((err) => {
        console.error('Error fetching trending movies:', err);
      });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="text-[40px] absolute top-1/2 left-2 z-10 cursor-pointer text-white"
        onClick={scrollLeft}
      />
      <HiChevronRight
        className="text-[40px] absolute top-1/2 right-2 z-10 cursor-pointer text-white"
        onClick={scrollRight}
      />

      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap  scroll-smooth scrollbar-hide py-4 px-2"
      >
        {movieList.map((item, index) => (
          <div key={index} className="inline-block w-[200px] mr-4">
              <img
              src={`${Image_Base_URL}${item.poster_path}`}
                alt={item.title || item.name}
                      className="rounded-lg h-[310px] object-cover w-full transition-transform duration-300 transform hover:scale-105 border-2 border-transparent hover:border-green-400"
                />
            <h3 className="text-sm mt-2 text-center text-white">
              {item.title || item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
