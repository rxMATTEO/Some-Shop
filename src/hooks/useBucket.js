import {addNotification, addProduct, removeProduct} from "../redux/actions/actions.js";
import {connect, useDispatch, useSelector} from "react-redux";
import {ADD_PRODUCT, REMOVE_PRODUCT} from "../redux/actions/actionTypes.js";
import {render} from "react-dom";
import Notification from "../components/input/notification/Notification.jsx";
import userClient from "../user/userClient.js";
import fetchJSON from "../fetchJSON.js";
import React from "react";

function useBucket(action, product){
  const dispatch = useDispatch();
  switch (action){
    case ADD_PRODUCT: {
      return function () {
        dispatch(addProduct(product));
        dispatch(addNotification("Вы успешно добавили товар в корзину!"));
        (async () => {
          const user = await userClient.getCurrentUser();
          if (user) fetchJSON(`/bucket/set?userId=${user.user.id}&productId=${product.id}`);
        })();
      }
    }
    case REMOVE_PRODUCT: {
      return function() {
        dispatch(removeProduct(product));
        dispatch(addNotification("Вы успешно удалили товар из корзины!"));
        (async () => {
          const user = await userClient.getCurrentUser();
          if (user) fetchJSON(`/bucket/remove?userId=${user.user.id}&productId=${product.id}`);
        })();
      }
    }
  }
}

export default useBucket;
