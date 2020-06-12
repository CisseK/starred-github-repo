import { combineReducers } from 'redux';

const INITIAL_STATE = {
  items: [],
  isFetching: false,
  error: undefined
};

const reposReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_REPOS_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'FETCH_REPOS_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.repos,
        headers: action.headers,
      });
    case 'FETCH_REPOS_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default combineReducers({
  repos: reposReducer
});