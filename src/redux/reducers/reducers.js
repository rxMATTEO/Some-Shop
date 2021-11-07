import {combineReducers} from "redux";
import {bucketReducer} from "./bucketReducer.js";
import notificationsReducer from "./notificationsReducer.js";

export const reducers = combineReducers({
  bucket: bucketReducer,
  notifications: notificationsReducer
});


