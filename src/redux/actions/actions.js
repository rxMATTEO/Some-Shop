import fetchJSON from "../../fetchJSON.js";
import userClient from "../../user/userClient.js";
import {ADD_NOTIFICATION, ADD_PRODUCT, REMOVE_PRODUCT, SET_STATE} from "./actionTypes.js";

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product
});

const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  product
});

const setState = (product) => ({
  type: SET_STATE,
  product: Array.from(product)
});

const addNotification = (notificationText) => ({
  type: ADD_NOTIFICATION,
  notificationText
});

export {addProduct, removeProduct, setState, addNotification};
