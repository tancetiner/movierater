import React, { useEffect, useState } from "react";
import { showSavedRequest, deleteMovieRequest } from "../services/requests";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Button, Grid, Fab } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
      <Fab
        sx={{ backgroundColor: "#4442bd", margin: 1 }}
        color="inherit"
        onClick={handleBack}
        aria-label="back"
      >
        <ArrowBackIosNewIcon />
      </Fab>
      {saveList.map((movie, idx) => (
        <div key={idx}>
          <MovieCard movie={movie} key={idx} />
          <Grid container justifyContent="center">
            <Button
              onClick={handleDelete(movie)}
              variant="contained"
              sx={{ backgroundColor: "#4442bd", margin: 1 }}
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
