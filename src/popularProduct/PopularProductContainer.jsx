import React from 'react';
import ReactDOM from 'react-dom';
import PopularProduct from "./PopularProduct.jsx";

class PopularProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="container-label content">Популярные товары</p>
        <div className="content popular-product-container">
          <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
          <PopularProduct imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
        </div>
      </div>
    );
  }
}

export default PopularProductContainer;
