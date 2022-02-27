import React, { useEffect, useState } from "react";
import { showSavedRequest } from "../services/requests";
import MovieDetail from "./MovieDetail";
import { useNavigate } from "react-router-dom";

const Saves = (props) => {
  const [username] = useState(localStorage.getItem("username"));
  const [saveList, setSaveList] = useState([]);
  const [successfulRequest, setSuccess] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const request = showSavedRequest(username);
    request
      .then((response) => {
        setSuccess(true);
        console.log(response.data);
        const list = [].concat(response.data);
        console.log(response.data);
        console.log(typeof response.data);
        setSaveList(list);
        console.log(saveList);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <button onClick={handleBack}> Back </button>
      {saveList.map((movie, idx) => (
        <div key={idx}>
          <MovieDetail movie={movie} key={idx}>
            {" "}
          </MovieDetail>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Saves;
