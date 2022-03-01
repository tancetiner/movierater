import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeRatingRequest, showRatedRequest } from "../services/requests";
import MovieDetail from "./MovieDetail";

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
      <button onClick={handleBack}> Back </button>
      {rateList.map((movie, idx) => (
        <div key={idx}>
          <MovieDetail movie={movie} key={idx} isRated={true}>
            {" "}
          </MovieDetail>
          <div>
            <form onSubmit={handleRate(movie)}>
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
          <br />
        </div>
      ))}
    </div>
  );
};

export default Rated;
