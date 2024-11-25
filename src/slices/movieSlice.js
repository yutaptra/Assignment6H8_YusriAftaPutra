import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  error: null,
  query: 'spider-man',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setMovies, setError, setQuery } = movieSlice.actions;

export default movieSlice.reducer;
