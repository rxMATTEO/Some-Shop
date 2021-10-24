import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from "../input/Carousel.jsx";
import Product from "../product/Product.jsx";
import fetchJSON from "../fetchJSON.js";

class RecentlyViewed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    //todo remove this to single method
    fetchJSON(`/get-user?token=${localStorage.getItem('token')}`, (user) => {
      if(!user) return;
      fetchJSON(`/get-view-history?userId=${user.user.id}`, (products) => {
        let prods = [];
        for (let i = 0; i < products.length; i++) {
          fetchJSON('/products/' + products[i].productId, (product) =>
          { prods.push(<Product imgSrc={product.imagePath} price={product.price} desc={product.name} key={i} id={product.id} />);
            this.setState({ products: prods });
          });
        }
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="content">
        <p className="container-label">Вы недавно смотрели</p>
        <div className="popular-product-container">
          <Carousel offset="270" items={products} />
        </div>
      </div>
    );
  }
}
export default RecentlyViewed;
