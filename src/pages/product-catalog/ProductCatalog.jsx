import React, {useEffect, useState} from 'react';
import NavMenu from "../../nav-menu/NavMenu.jsx";
import Header from "../../header/Header.jsx";
import Footer from "../../footer/Footer.jsx";
import "./product-catalog.sass";
import ProductRow from "../../input/ProductRow.jsx";
import fetchJSON from "../../fetchJSON.js";
import * as ReactDOM from "react-dom";
import NotFound from "../not-found/NotFound.jsx";

function ProductCatalog(props) {
  const [products, setProducts] = useState([]);
  const [header, setHeader] = useState("");
  useEffect(
    async () => {
      const json = await fetchJSON(props.location.pathname);
      if(Object.keys(json).length > 0){
        setProducts(json.map(( product, index) => <ProductRow imgSrc={product.imagePath} header={product.name} price={product.price} id={product.id} rating={product.rating} key={index} /> ));
      }
      else ReactDOM.render(<NotFound />, document.getElementById('root'));
      }
  , []);
  useEffect(() => {
    document.title = props.header || "Some shop";
  });

    return (
      <div>
        <Header />
        <NavMenu />
        <div className="product-catalog content">
          {
            products
          }
        </div>
        <Footer />
      </div>
    );
}

export default ProductCatalog;
