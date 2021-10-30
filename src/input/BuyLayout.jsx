import React from "react";
import "../pages/product/product-page.sass";

function BuyLayout(props){
  return (
    <div className="top__layout not-hoverable">
      <div className="layout__text">
        <span>{props.price}</span>
      </div>
      <div className="layout__button">
        <span className="button__text">Купить</span>
      </div>
    </div>
  );
}

export default BuyLayout;
