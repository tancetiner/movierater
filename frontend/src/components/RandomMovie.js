import React, { useEffect, useState } from "react";
import { randomMovieRequest } from "../services/requests";
import { Button, Grid } from "@mui/material";
import MovieDetail from "./MovieDetail";
import MovieCard from "./MovieCard";

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
        <Grid container direction="column">
          <MovieCard movie={moviedata} />
          <Button
            onClick={getMovie}
            color="inherit"
            sx={{ width: 1 / 3, alignSelf: "center" }}
          >
            {" "}
            Random Movie!{" "}
          </Button>
        </Grid>
      ) : (
        <p> Wait for movie to load... </p>
      )}
    </div>
  );
};

export default RandomMovie;
