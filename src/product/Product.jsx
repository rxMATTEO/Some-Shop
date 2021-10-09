import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../input/Button.jsx";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="popular-product" href="#" onDragStart={ (e) => e.preventDefault() }>
        <div className="product-img">
          <img src={this.props.imgSrc} alt={this.props.desc} onDragStart={ (e) => e.preventDefault() } />
        </div>
        <div className="product-bottom">
          <div className="product-price">
            {this.props.price}
          </div>
          <div className="product-desc">
            {this.props.desc}
          </div>
            <Button text="В корзину" className="product-button" />
        </div>
      </a>
    );
  }
}

export default Product;
