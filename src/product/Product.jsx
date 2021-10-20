import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../input/Button.jsx";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ paddingRight: "20px", paddingTop: "20px", display: "inline-block"}}>
        <a className="popular-product" href={"products/" + this.props.id} onDragStart={ (e) => e.preventDefault() } title={this.props.desc}>
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
      </div>
    );
  }
}

export default Product;
