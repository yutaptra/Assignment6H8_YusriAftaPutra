import movieReducer, { setMovies, setError, setQuery } from './movieSlice';

describe('movieSlice reducer', () => {
  const initialState = {
    movies: [],
    error: null,
    query: 'spider-man',
  };

  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setMovies', () => {
    const movies = [{ title: 'Movie 1' }, { title: 'Movie 2' }];
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
    const query = 'Batman';
    expect(movieReducer(initialState, setQuery(query))).toEqual({
      ...initialState,
      query,
    });
  });
});
