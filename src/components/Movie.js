import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={`Poster of the movie ${movie.Title}`}
      />
      <div className="card-body text-center bg-warning-subtle">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
