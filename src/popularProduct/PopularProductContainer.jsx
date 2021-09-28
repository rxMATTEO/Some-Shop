import React from 'react';
import ReactDOM from 'react-dom';
import PopularProduct from "./PopularProduct.jsx";

class PopularProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content popular-product-container">
        <p className="container-label">Популярные товары</p>
        <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
      </div>
    );
  }
}

export default PopularProductContainer;
