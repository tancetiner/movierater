import React, { useEffect, useState } from "react";
import { showSavedRequest, deleteMovieRequest } from "../services/requests";
import MovieDetail from "./MovieDetail";
import { useNavigate } from "react-router-dom";

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
      <button onClick={handleBack}> Back </button>
      {saveList.map((movie, idx) => (
        <div key={idx}>
          <MovieDetail movie={movie} key={idx}>
            {" "}
          </MovieDetail>
          <button onClick={handleDelete(movie)}> Delete from list </button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Saved;