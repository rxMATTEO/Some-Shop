import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../input/Button.jsx";

function Product(props){
  return (
    <div style={{ paddingRight: "20px", paddingTop: "20px", display: "inline-block"}}>
      <a className="popular-product" href={"products/" + props.id} onDragStart={ (e) => e.preventDefault() } title={props.desc}>
        <div className="product-img">
          <img src={props.imgSrc.split(';')[0]} alt={props.desc} onDragStart={ (e) => e.preventDefault() } />
        </div>
        <div className="product-bottom">
          <div className="product-price">
            {props.price}
          </div>
          <div className="product-desc">
            {props.desc}
          </div>
          <Button text="В корзину" className="product-button" />
        </div>
      </a>
    </div>
  );
}

export default Product;
