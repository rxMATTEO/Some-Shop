import {addProduct, removeProduct} from "../actions/actions.js";
import fetchJSON from "../../fetchJSON.js";
import {ADD_PRODUCT, REMOVE_PRODUCT, SET_STATE} from "../actions/actionTypes.js";

const initialState = {
  products: []
};

export function bucketReducer(state = initialState, action){
  switch (action.type){
    case ADD_PRODUCT:
      if(state.products.find( (item) => item.id === action.product.id )) return state;
      return { products: [...state.products, action.product] };

    case SET_STATE:
      return { products : [...action.product] };

    case REMOVE_PRODUCT:
      return { products: [...state.products].filter(product => product.id !== action.product.id) };

    default: return state;
  }
}
