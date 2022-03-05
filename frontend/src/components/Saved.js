import React, { useEffect, useState } from "react";
import { showSavedRequest, deleteMovieRequest } from "../services/requests";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Button, Grid } from "@mui/material";

const Saved = (props) => {
  const [username] = useState(localStorage.getItem("username"));
  const [saveList, setSaveList] = useState([]);
  const [successfulRequest, setSuccess] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    const request = showSavedRequest(username);
    request
      .then((response) => {
        const list = [].concat(response.data);
        setSaveList(list);
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    navigate("/home");
  };

  const handleDelete = (movie) => {
    return () => {
      const request = deleteMovieRequest(username, movie);
      request
        .then((response) => {
          console.log(response.data);
          loadMovies();
        })
        .catch((err) => console.log(err));
    };
  };

  return (
    <div>
      <Button onClick={handleBack} variant="contained">
        Back
      </Button>
      {saveList.map((movie, idx) => (
        <div key={idx}>
          <MovieCard movie={movie} key={idx} />
          <Grid container justifyContent="center">
            <Button
              onClick={handleDelete(movie)}
              variant="outlined"
              color="inherit"
            >
              {" "}
              Delete from list{" "}
            </Button>
          </Grid>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Saved;
