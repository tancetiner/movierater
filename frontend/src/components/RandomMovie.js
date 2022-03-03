import React, { useEffect, useState } from "react";
import { randomMovieRequest } from "../services/requests";
import MovieDetail from "./MovieDetail";

const RandomMovie = (props) => {
  const [moviedata, setMoviedata] = useState({});
  const [refresh, setRefresh] = useState(props.r);

  if (refresh) {
  }

  useEffect(() => {
    getMovie();
  }, [refresh]);

  const getMovie = () => {
    const request = randomMovieRequest();
    request.then((response) => {
      setMoviedata(response.data);
      localStorage.setItem("movie", JSON.stringify(response.data));
      console.log(response.data);
    });
  };

  return (
    <div>
      {Object.keys(moviedata).length !== 0 ? (
        <MovieDetail movie={moviedata} />
      ) : (
        <p> Wait for movie to load... </p>
      )}
      <button onClick={getMovie}> Random Movie! </button>
    </div>
  );
};

export default RandomMovie;
