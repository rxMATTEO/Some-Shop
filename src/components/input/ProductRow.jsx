import React, {useState} from 'react';
import "../../pages/product/product-page.sass";
import "../../pages/product-catalog/product-catalog.sass";
import BuyLayout from "./BuyLayout.jsx";
import Star from "./Star.jsx";
import StarRating from "./StarRating.jsx";

function ProductRow(props){
  const [className, setClassName] = useState("product-row");

  function onClick(e){
    if(e.target.tagName === 'path') e.preventDefault();
  }

    return (
      <a className={className} href={"/products/" + props.id} onClick={(e) => onClick(e)} title={props.header}>
        <div className="product-row__img">
          <img src={props.imgSrc.split(';')[0]} alt={props.header}/>
        </div>
        <div className="product-row__top">
          <div className="product-row__header">
            <p className="header__text">{props.header}</p>
          </div>
          <BuyLayout product={props}/>
          <div className="product__bottom">
            <StarRating product={props} />
          </div>
        </div>
      </a>
    );
}


export default ProductRow;
