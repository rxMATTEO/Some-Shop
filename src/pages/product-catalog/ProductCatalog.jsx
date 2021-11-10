import React, {useEffect, useRef, useState, Suspense} from 'react';
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./product-catalog.sass";
import fetchJSON from "../../fetchJSON.js";
import * as ReactDOM from "react-dom";
import NotFoundPage from "../not-found/NotFoundPage.jsx";
import {useHistory} from "react-router";
import LoadingScreen from "../../components/input/loading-screen/LoadingScreen.jsx";
import configuration from "../../configuration.js";

function ProductCatalog(props) {
  const [products, setProducts] = useState([]);
  const [header, setHeader] = useState("");
  const history = useHistory();
  useEffect(
    async () => {
      const json = await fetchJSON(props.location.pathname);
      if(Object.keys(json).length > 0 && !json[0]._productKind_){
        setProducts(json.map(( response, index) => {
          if(!response._productKind_) {
            const ProductRow = React.lazy(() => import("../../components/input/product-row/ProductRow.jsx"));
            return (
              <Suspense fallback={<LoadingScreen />}>
                <ProductRow product={response} key={index} />
              </Suspense>
            );
          }
          const header = response._productKind_;
          props.routeType === 'brand' ? setHeader(`Все товары ${header}`): setHeader(header);
          document.title = `${header} | ${configuration.appName}`;
        }));
      }
      else history.push("/not-found");
      }
  , []);

    return (
      <div>
        <Header />
        <NavMenu />
        <div className="content product-header" style={{padding: "20px 0 0 0"}}>
          {header}
        </div>
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
