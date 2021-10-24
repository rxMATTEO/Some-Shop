import React from 'react';
import "../pages/product/product.sass";
import "../pages/product-catalog/productCatalog.sass";
import BuyLayout from "./BuyLayout.jsx";
import Star from "./Star.jsx";
import StarRating from "./StarRating.jsx";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { className: "product-row" };
  }

  onClick(e){
    if(e.target.tagName === 'path') e.preventDefault();
  }

  render() {
    return (
      <a className={this.state.className} href={"/products/" + this.props.id} onClick={(e) => this.onClick(e)}>
        <div className="product-row__img">
          <img src={this.props.imgSrc} />
        </div>
        <div className="product-row__top">
          <div className="product-row__header">
            <p className="header__text">{this.props.header}</p>
          </div>
          <BuyLayout price={this.props.price}/>
          <div className="product__bottom">
            <StarRating product={this.props} />
          </div>
        </div>
      </a>
    );
  }
}


export default ProductRow;
