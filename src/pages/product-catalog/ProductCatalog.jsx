import React, {useEffect, useState} from 'react';
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./product-catalog.sass";
import ProductRow from "../../components/input/ProductRow.jsx";
import fetchJSON from "../../fetchJSON.js";
import * as ReactDOM from "react-dom";
import NotFoundPage from "../not-found/NotFoundPage.jsx";
import {useHistory} from "react-router";

function ProductCatalog(props) {
  const [products, setProducts] = useState([]);
  const [header, setHeader] = useState("");
  const history = useHistory();
  useEffect(
    async () => {
      const json = await fetchJSON(props.location.pathname);
      if(Object.keys(json).length > 0){
        setProducts(json.map(( product, index) => <ProductRow imgSrc={product.imagePath} header={product.name} price={product.price} id={product.id} rating={product.rating} key={index} /> ));
      }
      else history.push("/not-found");
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
