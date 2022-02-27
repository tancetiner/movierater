import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomMovie from "./RandomMovie";
import { saveRequest } from "../services/requests";
import RateForm from "./RateForm";

const Home = () => {
  let navigate = useNavigate();

  const persistentUserData = localStorage.getItem("user");
  const [userData] = useState(JSON.parse(persistentUserData));
  const [userRates, setUserRates] = useState(false);
  localStorage.setItem("userRates", false);

  useEffect(() => {
    if (persistentUserData) {
      localStorage.setItem("username", userData.username);
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("userRates"));
    setUserRates(localStorage.getItem("userRates"));
  });

  const handleLogout = (event) => {
    localStorage.clear();
    navigate("/");
  };

  const handleSave = (event) => {
    event.preventDefault();
    const movieData = localStorage.getItem("movie");
    if (movieData === null) {
      alert("You must press the Random Movie button first!");
    } else {
      const request = saveRequest(userData.username, movieData);
      request
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRateIt = (event) => {
    event.preventDefault();
    if (localStorage.getItem("movie") === null) {
      alert("You must press the Random Movie button first!");
    } else {
      localStorage.setItem("userRates", true);
    }
  };

  return (
    <div>
      <h1> Homepage </h1>
      <h2>
        {" "}
        Welcome {persistentUserData ? userData.username : " "}{" "}
        <button onClick={handleLogout}> Logout </button>{" "}
      </h2>

      <div>
        <RandomMovie> </RandomMovie>
      </div>
      <br />
      <button onClick={handleSave}> Save to Watchlist </button>
      <br />
      <br />
      {userRates ? (
        <RateForm> </RateForm>
      ) : (
        <button onClick={handleRateIt}> Rate it! </button>
      )}
      <p>
        {" "}
        {localStorage.getItem("userRates")
          ? localStorage.getItem("userRates")
          : ""}{" "}
      </p>
    </div>
  );
};

export default Home;
