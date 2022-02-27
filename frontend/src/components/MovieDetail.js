import React from "react";

const MovieDetail = ({ movie }) => (
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
          <td> Rating: </td>
          <td> {JSON.stringify(movie.imdbRating)} </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MovieDetail;
