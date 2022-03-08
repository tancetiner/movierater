import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeRatingRequest, showRatedRequest } from "../services/requests";
import MovieCard from "./MovieCard";
import {
  Button,
  Select,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
  Fab,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Rated = () => {
  const [username] = useState(localStorage.getItem("username"));
  const [rateList, setRateList] = useState([]);
  const [rating, setRating] = useState("1");

  let navigate = useNavigate();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    const request = showRatedRequest(username);
    request
      .then((response) => {
        console.log(response.data);
        const list = [].concat(response.data);
        setRateList(list);
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    navigate("/home");
  };

  const handleRate = (movie) => (event) => {
    event.preventDefault();
    const request = changeRatingRequest(username, movie, rating);
    request
      .then((response) => {
        console.log(response.data);
        loadMovies();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
      {rateList.map((movie, idx) => (
        <div key={idx}>
          <MovieCard movie={movie} isRated />
          <Grid container justifyContent="center" direction="row" padding={2}>
            <Box sx={{ minWidth: 100 }}>
              <Grid item>
                <FormControl size="small" variant="standard">
                  <InputLabel sx={{ fontSize: 14 }}>Rating</InputLabel>

                  <Select
                    sx={{ color: "text.primary" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="1"
                    value={rating}
                    onChange={handleChange}
                  >
                    {ratings.map((rate) => (
                      <MenuItem value={rate} key={rate} color="inherit">
                        {rate}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Box>
            <Grid item>
              <Button
                onClick={handleRate(movie)}
                variant="contained"
                padding={2}
                style={{
                  borderRadius: 10,
                  backgroundColor: "#4442bd",
                  margin: "4px",
                }}
              >
                Rate
              </Button>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Rated;
