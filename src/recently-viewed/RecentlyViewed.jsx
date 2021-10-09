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
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="1" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="2" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="3" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="4" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="5" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="6" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="7" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="8" />,
      <Product imgSrc="https://ru.reactjs.org/logo-og.png" price="200000" desc="9" />
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
