import React, {useState} from 'react';
import "../../pages/product/product-page.sass";
import "../../pages/product-catalog/product-catalog.sass";
import useBucket from "../../hooks/useBucket.js";
import {REMOVE_PRODUCT} from "../../redux/actions/actionTypes.js";

function BucketItem(props){
  const [className, setClassName] = useState("product-row");
  const removeProduct = useBucket(REMOVE_PRODUCT, props.product);
  function onClick(e){
    if(e.target.tagName === 'path') e.preventDefault();
  }

  return (
    <a className={className + " bucket-item"} href={"/products/" + props.product.id} onClick={(e) => onClick(e)} title={props.product.name}>
      <div className="notification__close" onClick={(e) => { removeProduct(); e.preventDefault(); }} data-tooltip="Удалить товар из корзины">
        x
      </div>
      <div className="product-row__img">
        <img src={props.product.imagePath.split(';')[0]} alt={props.product.name}/>
      </div>
      <div className="product-row__top">
        <div className="product-row__header">
          <p className="header__text">{props.product.name}</p>
        </div>
        <div>
          <div className="layout__text bucket-price">
            {props.product.price}
          </div>
        </div>
      </div>
    </a>
  );
}


export default BucketItem;
