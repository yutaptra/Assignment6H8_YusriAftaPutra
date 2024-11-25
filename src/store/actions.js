export const SET_MOVIES = 'SET_MOVIES';
export const SET_ERROR = 'SET_ERROR';
export const SET_QUERY = 'SET_QUERY';

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});
