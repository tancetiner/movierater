import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showRatedRequest } from "../services/requests";
import MovieDetail from "./MovieDetail";

const Rated = () => {
  const [username] = useState(localStorage.getItem("username"));
  const [rateList, setRateList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const request = showRatedRequest(username);
    request
      .then((response) => {
        console.log(response.data);
        const list = [].concat(response.data);
        setRateList(list);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <button onClick={handleBack}> Back </button>
      {rateList.map((movie, idx) => (
        <div key={idx}>
          <MovieDetail movie={movie} key={idx} isRated={true}>
            {" "}
          </MovieDetail>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Rated;
