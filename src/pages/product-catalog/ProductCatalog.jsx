import React from 'react';
import NavMenu from "../../nav-menu/NavMenu.jsx";
import Header from "../../header/Header.jsx";
import * as ReactDOM from "react-dom";
import NotFound from "../not-found/NotFound.jsx";
import Footer from "../../footer/Footer.jsx";
import "./productCatalog.sass";
import ProductRow from "../../input/ProductRow.jsx";

class ProductCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: {}};
    if(props.match.path === '/:subcategory/:brand'){
      this.fetchSubcategory();
    }
    else if(props.match.path === '/category/:categoryName'){
      this.fetchCategoryProduct();
    }
  }

  fetchSubcategory(){
    fetch(`http://localhost:3000/${this.props.match.params.subcategory}/${this.props.match.params.brand}`, {
      method: "GET"
    }).then( res => {
      if(res.status === 404){
        ReactDOM.render(<NotFound />, document.getElementById('root'));
        return;
      }
      return res.json();
    }).then( (res) => { // todo fix duplicate, remove api to methods
      if(!res.length) ReactDOM.render(<NotFound />, document.getElementById('root'));
      this.setState({products: res});
    });
  }

  fetchCategoryProduct(){
    fetch(`http://localhost:3000/category/${this.props.match.params.categoryName}`, {
      method: "GET"
    }).then( res => {
      if(res.status === 404){
        ReactDOM.render(<NotFound />, document.getElementById('root'));
        return;
      }
      return res.json();
    }).then( (res) => { // todo fix duplicate, remove api to methods
      if(!res.length) ReactDOM.render(<NotFound />, document.getElementById('root'));
      this.setState({products: res});
    });
  }

  render() {
    let { products } = this.state;
    const productsArray = [];
    if(Object.keys(products).length > 0){
      for (let product of products) {
        productsArray.push(
          <ProductRow imgSrc={product.imagePath} header={product.name} price={product.price} id={product.id}/>
        );
      }
    }
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
