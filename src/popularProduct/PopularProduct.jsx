import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../input/Button.jsx";

class PopularProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popular-product">
        <div className="product-img">
          <img src={this.props.imgSrc} />
        </div>
        <div className="product-bottom">
          <div className="product-price">
            {this.props.price}
          </div>
          <div className="product-desc">
            {this.props.desc}
          </div>
          <div>
            <Button text="В корзину" className="product-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default PopularProduct;
