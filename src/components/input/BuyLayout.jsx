import React, {useState} from "react";
import "../../pages/product/product-page.sass";
import {connect, useDispatch, useSelector} from "react-redux";
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import {bucketReducer} from "../../redux/reducers/bucketReducer.js";
import fetchJSON from "../../fetchJSON.js";
import userClient from "../../user/userClient.js";
import {addProductToBucket} from "../../pages/bucket/BucketPage.jsx";

function BuyLayout(props){
  return (
    <div className="top__layout not-hoverable">
      <div className="layout__text">
        <span>{props.product.price}</span>
      </div>
      <div className="layout__button" onClick={(e) => addProductToBucket(e, props.product, props)}>
        <span className="button__text">Купить</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyLayout);
