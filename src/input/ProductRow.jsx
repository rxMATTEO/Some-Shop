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
          <div className="product__bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="black">
              <linearGradient id="linear-gradient">
                <stop offset="50%" stop-color="#D39200"/>
                <stop offset="50%" stop-color="white"/>
              </linearGradient>
              <path fill="url(#linear-gradient)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
          </div>
        </div>
      </a>
    );
  }
}


export default ProductRow;
