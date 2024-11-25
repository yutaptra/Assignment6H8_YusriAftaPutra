import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSearch} className="d-flex">
      <label htmlFor="movie-search" className="visually-hidden">
        Search for movies
      </label>
      <input
        type="text"
        id="movie-search"
        name="movieSearch"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for movies..."
        className="form-control me-2"
        aria-label="Search for movies"
      />
      <button
        type="submit"
        className="btn btn-dark"
        aria-describedby="search-hint"
      >
        Search
      </button>
      <span id="search-hint" className="visually-hidden">
        Enter a movie name and press the search button
      </span>
    </form>
  );
};

export default Search;
