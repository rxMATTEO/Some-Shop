import React from 'react';
import ReactDOM from 'react-dom';
import Product from "../product/Product.jsx";
import fetchJSON from "../fetchJSON.js";

class PopularProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    fetchJSON('/popular-products', (result) => {
      let arr = [];
      for (let item of result) {
        arr.push( <Product price={item.price} desc={item.name} imgSrc={item.imagePath} id={item.id} /> );
      }
      this.setState({items: arr});
    });
  }

  render() {
      return(
        <div>
        <p className="container-label content">Популярные товары</p>
        <div className="content popular-product-container">
          {this.state.items}
        </div>
      </div>
    );
  }
}

export default PopularProductContainer;
