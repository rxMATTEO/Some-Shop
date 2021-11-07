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
      <a className={className} href={"/products/" + props.product.id} onClick={(e) => onClick(e)} title={props.product.name}>
        <div className="product-row__img">
          <img src={props.product.imagePath.split(';')[0]} alt={props.product.name}/>
        </div>
        <div className="product-row__top">
          <div className="product-row__header">
            <p className="header__text">{props.product.name}</p>
          </div>
          <BuyLayout product={props.product}/>
          <div className="product__bottom">
            <StarRating product={props.product} />
          </div>
        </div>
      </a>
    );
}


export default ProductRow;
