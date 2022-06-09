import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  // wrap a axios in a useEffect api

  // taking a movie and take a movie random at each time
  // display one movie at a time
  const movie = movies[Math.floor(Math.random() * movies.length)];
  // page load huda yo garinxa nonstop call garinxa tei  vaya ra
  useEffect(() => {
    // api call it return a promises .then
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className=" w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[750px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path} `}
          alt={movie?.title}
          // ?this is optional training
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-500 px-5 py-2">
              Play
            </button>
            <button className="border text-white border-gray-300 px-5 py-2 ml-4">
              Watch Later
            </button>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Relased: {movie?.release_date}
            </p>
            <p className="text-gray-400 text-sm">IMDB: {movie?.vote_average}</p>
            <p
              className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]
            text-gray-200"
            >
              {truncateString(movie?.overview, 180)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
