import React, {useState} from "react";
import "../../pages/product/product-page.sass";
import {connect, useDispatch, useSelector} from "react-redux";
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import {bucketReducer} from "../../redux/reducers/bucketReducer.js";
import fetchJSON from "../../fetchJSON.js";
import userClient from "../../user/userClient.js";
import useBucket from "../../hooks/useBucket.js";
import {ADD_PRODUCT} from "../../redux/actions/actionTypes.js";

function BuyLayout(props){
  const addProduct = useBucket(ADD_PRODUCT, props.product);
  return (
    <div className="top__layout not-hoverable">
      <div className="layout__text">
        <span>{props.product.price}</span>
      </div>
      <div className="layout__button" onClick={(e) => {addProduct(); e.preventDefault()}}>
        <span className="button__text">Купить</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
  return { products: state.bucket.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyLayout);
