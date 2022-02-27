import React, { useEffect, useState } from "react";
import randomMovieRequest from "../services/randomMovieRequest";
import MovieDetail from "./MovieDetail";

const RandomMovie = () => {

    const [moviedata, setMoviedata] = useState({});


    const getMovie = () => {
        const request = randomMovieRequest();
        request.then(response => {
            setMoviedata(response.data);
            localStorage.setItem("movie", JSON.stringify(response.data));
            console.log(response.data);
        })
    }

    return (
        <div>
            {Object.keys(moviedata).length !== 0 ? <MovieDetail movie={moviedata} /> : <p> Press the button for a random movie! </p>}
            <button onClick={getMovie}> Random Movie! </button>
        </div>
    )
}

export default RandomMovie;