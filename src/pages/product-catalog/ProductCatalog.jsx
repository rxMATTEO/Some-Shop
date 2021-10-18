import React from 'react';
import NavMenu from "../../nav-menu/NavMenu.jsx";
import Header from "../../header/Header.jsx";
import * as ReactDOM from "react-dom";
import NotFound from "../not-found/NotFound.jsx";
import Footer from "../../footer/Footer.jsx";
import "./productCatalog.sass";
import ProductRow from "../../input/ProductRow.jsx";
import configuration from "../../configuration.js";
import fetchJSON from "../../fetchJSON.js";

class ProductCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: {}};
    fetchJSON(this.props.location.pathname, (result) => this.setState({ products: result }));
  }

  render() {
    let { products } = this.state;
    const productsArray = [];
    if(Object.keys(products).length > 0){
      for (let product of products) {
        productsArray.push(
          <ProductRow imgSrc={product.imagePath} header={product.name} price={product.price} id={product.id} rating={product.rating}/>
        );
      }
    }
    if(this.state.product) document.title = this.state.product.name;

    return (
      <div>
        <Header />
        <NavMenu />
        <div className="product-catalog content">
          {
            productsArray
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductCatalog;
