import React from 'react';
import "../pages/product-catalog/productCatalog.sass";

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
          <div className="product-row__middle-layout">
            <div className="middle-layout__left-text">
              {this.props.price}
            </div>
            <div className="middle-layout__button">
              Купить
            </div>
          </div>
        </div>
      </a>
    );
  }
}


export default ProductRow;
