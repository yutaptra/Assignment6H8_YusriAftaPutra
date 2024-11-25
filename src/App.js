import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';
import { setMovies, setError, setQuery } from './slices/movieSlice';

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);
  const query = useSelector((state) => state.movies.query);

  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovies = useCallback(async (searchQuery) => {
    try {
      const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${searchQuery}`);
      if (response.data.Response === "True") {
        dispatch(setMovies(response.data.Search));
        dispatch(setError(null));
      } else {
        dispatch(setMovies([]));
        dispatch(setError(response.data.Error));
      }
    } catch (err) {
      dispatch(setError("An error occurred while fetching data."));
    }
  }, [API_URL, API_KEY, dispatch]);

  useEffect(() => {
    fetchMovies(query);
  }, [query, fetchMovies]);

  return (
    <div className="container mt-4">
      <Header title="Movie App" setQuery={(q) => dispatch(setQuery(q))} />
      <div className="row">
        {error ? (
          <p>{error}</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <Movie movie={movie} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
