import {combineReducers} from "redux";
import {bucketReducer} from "./bucketReducer.js";

export const reducers = combineReducers({
  bucket: bucketReducer
});


