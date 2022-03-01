import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

const loginRequest = (username, password) => {
  const user = {
    username: username,
    password: password,
  };
  console.log("in the request");
  const request = axios.post(`${baseURL}/login`, user);
  return request;
};

const randomMovieRequest = () => {
  console.log("inside the movie request");
  const request = axios.get("https://k2maan-moviehut.herokuapp.com/api/random");
  return request;
};

const registerRequest = (username, password) => {
  const user = {
    username: username,
    password: password,
  };
  console.log("in the register request");
  const request = axios.post(`${baseURL}/register`, user);
  return request;
};

const saveRequest = (username, movieData) => {
  const save = {
    username: username,
    movie: movieData,
  };

  console.log("in the save request");
  const request = axios.post(`${baseURL}/save`, save);
  return request;
};

const rateRequest = (username, movieData, rate) => {
  const rating = {
    movie: movieData,
    rating: rate,
    username: username,
  };

  console.log("in the rate request");
  const request = axios.post(`${baseURL}/rate`, rating);
  return request;
};

const showSavedRequest = (username) => {
  console.log("in the watchlist request");
  const body = { username: username };
  const request = axios.post(`${baseURL}/saved`, body);
  return request;
};

const showRatedRequest = (username) => {
  console.log("in the rated movies request");
  const body = { username: username };
  const request = axios.post(`${baseURL}/rated`, body);
  return request;
};

const deleteMovieRequest = (username, movieData) => {
  console.log("in the delete movie request");
  const body = {
    username: username,
    movie: movieData,
  };
  const request = axios.post(`${baseURL}/deleteMovie`, body);
  return request;
};

const changeRatingRequest = (username, movieData, rate) => {
  console.log("in the change rating request");
  const body = {
    username: username,
    movie: movieData,
    rating: rate,
  };
  const request = axios.post(`${baseURL}/changeRating`, body);
  return request;
};

export {
  loginRequest,
  registerRequest,
  saveRequest,
  randomMovieRequest,
  rateRequest,
  showSavedRequest,
  showRatedRequest,
  deleteMovieRequest,
  changeRatingRequest,
};
