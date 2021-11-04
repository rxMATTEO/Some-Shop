import React, {useState} from 'react';
import "../../pages/product/product-page.sass";
import "../../pages/product-catalog/product-catalog.sass";

function BucketItem(props){
  const [className, setClassName] = useState("product-row");

  function onClick(e){
    if(e.target.tagName === 'path') e.preventDefault();
  }

  function onBucketItemRemove(){
  }

  return (
    <a className={className + " bucket-item"} href={"/products/" + props.id} onClick={(e) => onClick(e)} title={props.header}>
      <div className="notification__close">
        x
      </div>
      <div className="product-row__img">
        <img src={props.imgSrc.split(';')[0]} alt={props.header}/>
      </div>
      <div className="product-row__top">
        <div className="product-row__header">
          <p className="header__text">{props.header}</p>
        </div>
        <div>
          <div className="layout__text bucket-price">
            {props.price}
          </div>
        </div>
      </div>
    </a>
  );
}


export default BucketItem;
