import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../input/Button.jsx";
import {addProductToBucket} from "../../pages/bucket/BucketPage.jsx";
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import {connect} from "react-redux";

function Product(props){
  return (
    <div style={{ paddingRight: "20px", paddingTop: "20px", display: "inline-block"}}>
      <a className="popular-product" href={"products/" + props.product.id} onDragStart={ (e) => e.preventDefault() } title={props.product.desc}>
        <div className="product-img">
          <img src={props.product.imagePath.split(';')[0]} alt={props.product.desc} onDragStart={ (e) => e.preventDefault() } />
        </div>
        <div className="product-bottom">
          <div className="product-price">
            {props.product.price}
          </div>
          <div className="product-desc">
            {props.product.name}
          </div>
          <Button text="В корзину" className="product-button" onClick={(e) => addProductToBucket(e, props.product, props)} />
        </div>
      </a>
    </div>
  );
}

const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
