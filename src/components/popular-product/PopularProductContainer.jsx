import React, { useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import fetchJSON from "../../fetchJSON.js";
import configuration from "../../configuration.js";
import NotFoundPage from "../../pages/not-found/NotFoundPage.jsx";
import LoadingScreen from "../input/loading-screen/LoadingScreen.jsx";

function PopularProductContainer() {
  const [products, setProducts] = useState([]);
  const Product = React.lazy(() => import("../product/Product.jsx"));
  useEffect(() => {
    async function fetchProducts() {
      const json = await fetchJSON("/popular-products");
      setProducts(json);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <p className="container-label content">Популярные товары</p>
      <div className="content popular-product-container">
        {products.map( (product, index) => (
          <Suspense fallback={<LoadingScreen />} key={index}>
            <Product product={product} key={index} />
          </Suspense>
          )
        )}
      </div>
    </div>
  );
}

export default PopularProductContainer;
