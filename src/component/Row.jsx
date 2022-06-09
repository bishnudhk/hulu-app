import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Row = ({ title, fetchURL , rowID }) => {
  // map  through all of our movie and make request inside of our component
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  // whenever the url url changes the component will fire off again

  // console.log(movies)

  // we have two function slidLeft
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <RiArrowLeftSLine
          //  hook this up
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden
           group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
              <Movies key={id} item={item} />
          ))}
        </div>
        <RiArrowRightSLine
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
    // after row lets move to firebase we're going to be used context
  );
};

export default Row;
