import configuration from "./configuration.js";
import * as ReactDOM from "react-dom";
import React from 'react';
import NotFound from "./pages/not-found/NotFound.jsx";

function fetchJSON(locationPath, callback){
  return fetch(configuration.serverUrl + locationPath, {
    method: "GET"
  }).then( res => {
    if(res.status === 404){
      ReactDOM.render(<NotFound />, document.getElementById('root'));
      return;
    }
    return res.json();
  }).then( (res) => {
    if(callback) callback(res);
    return res;
  });
}

export default fetchJSON;
