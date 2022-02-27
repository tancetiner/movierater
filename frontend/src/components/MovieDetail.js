import React from "react";

const MovieDetail = ({ movie, isRated }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td> Name: </td>
          <td>
            {" "}
            {JSON.stringify(movie.name).slice(
              1,
              JSON.stringify(movie.name).length - 1
            )}{" "}
          </td>
        </tr>

        <tr>
          <td> Year: </td>
          <td> {JSON.stringify(movie.releaseYear)} </td>
        </tr>

        <tr>
          <td> Director: </td>
          <td>
            {" "}
            {JSON.stringify(movie.director).slice(
              1,
              JSON.stringify(movie.director).length - 1
            )}{" "}
          </td>
        </tr>

        <tr>
          <td> IMDB Rating: </td>
          <td> {JSON.stringify(movie.imdbRating)} </td>
        </tr>

        {isRated && (
          <tr>
            <td> Your Rating: </td>
            <td> {JSON.stringify(movie.userRating)} </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default MovieDetail;
