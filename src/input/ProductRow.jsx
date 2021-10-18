import React from 'react';
import "../pages/product/product.sass";
import "../pages/product-catalog/productCatalog.sass";
import BuyLayout from "./BuyLayout.jsx";
import Star from "./Star.jsx";
import StarRating from "./StarRating.jsx";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="product-row" href={"/products/" + this.props.id}>
        <div className="product-row__img">
          <img src={this.props.imgSrc} />
        </div>
        <div className="product-row__top">
          <div className="product-row__header">
            <p className="header__text">{this.props.header}</p>
          </div>
          <BuyLayout price={this.props.price}/>
          <div className="product__bottom">
            <StarRating rating={this.props.rating} />
          </div>
        </div>
      </a>
    );
  }
}


export default ProductRow;
