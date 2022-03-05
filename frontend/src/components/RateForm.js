import React, { useState } from "react";
import { rateRequest, changeRatingRequest } from "../services/requests";
import { useNavigate } from "react-router-dom";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Button,
} from "@mui/material";

const RateForm = (props) => {
  const [rating, setRating] = useState("");

  let navigate = useNavigate();

  const handleRate = (event) => {
    event.preventDefault();
    const movieData = localStorage.getItem("movie");
    const username = localStorage.getItem("username");
    if (movieData === null) {
      alert("You must press the Random Movie button first!");
    } else {
      console.log("Rating:", rating);
      const request = rateRequest(username, movieData, rating);
      request
        .then((response) => {
          console.log(response.data);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    }
    localStorage.setItem("userRates", false);
  };

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    // <div>
    //   <form onSubmit={handleRate}>
    //     <select value={rating} onChange={handleChange}>
    //       {ratings.map((rate) => (
    //         <option value={`${rate}`} key={rate}>
    //           {rate}
    //         </option>
    //       ))}
    //     </select>
    //     <input type="submit" value="Rate!" />
    //   </form>
    // </div>

    <Box sx={{ minWidth: 100 }}>
      <FormControl
        size="small"
        variant="standard"
        sx={{ color: "text.primary" }}
      >
        <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>
          {" "}
          Rating{" "}
        </InputLabel>
        <Select
          sx={{ color: "text.primary", fontSize: 20 }}
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
        <Button
          onClick={handleRate}
          color="inherit"
          variant="outlined"
          padding={2}
        >
          {" "}
          Rate{" "}
        </Button>
      </FormControl>
    </Box>
  );
};

export default RateForm;
