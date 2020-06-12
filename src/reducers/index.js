import { combineReducers } from 'redux';

import repos from './reducers';

const rootReducer = combineReducers({
	repos,
});

export default rootReducer;