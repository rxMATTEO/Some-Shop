import React from 'react';
import ReactDOM from 'react-dom';
import Product from "../product/Product.jsx";

class PopularProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="container-label content">Популярные товары</p>
        <div className="content popular-product-container">
          <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        </div>
      </div>
    );
  }
}

export default PopularProductContainer;
