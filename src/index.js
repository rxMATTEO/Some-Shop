import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.sass';
import * as redux from "redux";
import {reducers} from "./redux/reducers/reducers.js";
import {Provider} from "react-redux";
import {applyMiddleware, compose} from "redux";
import {bucketReducer} from "./redux/reducers/bucketReducer.js";
import fetchJSON from "./fetchJSON.js";
import userClient from "./user/userClient.js";
import {SET_STATE} from "./redux/actions/actionTypes.js";

(async() => {
  const user = await userClient.getCurrentUser();
  if(user){
    const products = await fetchJSON(`/bucket/get?userId=${user.user.id}`);
    store.dispatch({type: SET_STATE, product: products});
  }
})();
const store = redux.createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
