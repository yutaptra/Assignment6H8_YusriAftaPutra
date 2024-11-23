import { SET_MOVIES, SET_ERROR, SET_QUERY } from './actions';

const initialState = {
  movies: [],
  error: null,
  query: 'spider-man',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
