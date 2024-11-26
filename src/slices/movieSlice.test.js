import movieReducer, { setMovies, setError, setQuery } from './movieSlice';

describe('movieSlice reducer', () => {
  const initialState = {
    movies: [],
    error: null,
    query: 'Spider-Man',
  };

  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setMovies', () => {
    const movies = [{ title: 'Spider-Man' }];
    expect(movieReducer(initialState, setMovies(movies))).toEqual({
      ...initialState,
      movies,
    });
  });

  it('should handle setError', () => {
    const error = 'An error occurred';
    expect(movieReducer(initialState, setError(error))).toEqual({
      ...initialState,
      error,
    });
  });

  it('should handle setQuery', () => {
    const query = 'Spider-Man';
    expect(movieReducer(initialState, setQuery(query))).toEqual({
      ...initialState,
      query,
    });
  });
});
