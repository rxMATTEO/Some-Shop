import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from "../input/Carousel.jsx";
import Product from "../product/Product.jsx";

class RecentlyViewed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="React" />
    ];
    return (
      <div className="content">
        <p className="container-label">Вы недавно смотрели</p>
        <div className="popular-product-container">
          <Carousel offset="250" items={items} />
        </div>
      </div>
    );
  }
}
export default RecentlyViewed;
