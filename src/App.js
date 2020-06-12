import React from 'react';
import './App.css';
import Page from './components/layouts/page/index';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Page} />
      </Router>
    </Provider>
  );
}

export default App;
