import React, { useState } from "react";
import { rateRequest } from "../services/requests";
import { useNavigate } from "react-router-dom";

const RateForm = (props) => {
  const [rating, setRating] = useState("1");

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
    <div>
      <form onSubmit={handleRate}>
        <select value={rating} onChange={handleChange}>
          {ratings.map((rate) => (
            <option value={`${rate}`} key={rate}>
              {" "}
              {rate}{" "}
            </option>
          ))}
        </select>
        <input type="submit" value="Rate!" />
      </form>
    </div>
  );
};

export default RateForm;
