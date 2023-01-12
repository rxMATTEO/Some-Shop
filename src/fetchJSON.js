import configuration from "./configuration.js";
import * as ReactDOM from "react-dom";
import React from 'react';
import NotFoundPage from "./pages/not-found/NotFoundPage.jsx";

function fetchJSON(locationPath, callback){
  return fetch(configuration.apiUrl + locationPath, {
    method: "GET"
  }).then( res => {
    if(res.status === 404){
      return;
    }
    return res.json();
  }).then( (res) => {
    if(callback) callback(res);
    return res;
  });
}

export default fetchJSON;
