import configuration from "./configuration.js";
import * as ReactDOM from "react-dom";
import React from 'react';
import NotFound from "./pages/not-found/NotFound.jsx";

function fetchJSON(locationPath, callback){
  fetch(configuration.serverUrl + locationPath, {
    method: "GET"
  }).then( res => {
    if(res.status === 404){
      ReactDOM.render(<NotFound />, document.getElementById('root'));
      return;
    }
    return res.json();
  }).then( (res) => {
    if(Object.keys(res).length === 0) ReactDOM.render(<NotFound />, document.getElementById('root'));
    if(callback) callback(res);
  });
}

export default fetchJSON;
