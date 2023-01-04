import React, { useEffect, useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import fetchJSON from "../../fetchJSON.js";
import configuration from "../../configuration.js";
import NotFoundPage from "../../pages/not-found/NotFoundPage.jsx";
import LoadingScreen from "../input/loading-screen/LoadingScreen.jsx";
import Carousel from "../input/carousel/Carousel.jsx";

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

  const productItems = products.map( (product, index) => (
      <Suspense fallback={<LoadingScreen />} key={index}>
        <Product product={product} key={index} />
      </Suspense>
    )
  );
  const [productContainer, setProductContainer] = useState(<LoadingScreen/>);
  useEffect(() => {
    const setContainerByPlatform = () => {
      const container = window.innerWidth < 600 ? <Carousel items={productItems} offset={250}/> :
        <div>{productItems}</div>;
      setProductContainer(container);
    };
    setContainerByPlatform();
    window.addEventListener("resize", setContainerByPlatform);
  }, [productItems.length]);

  return (
    <div>
      <p className="container-label content">Популярные товары</p>
      <div className="content popular-product-container">
        {productContainer}
      </div>
    </div>
  );
}

export default PopularProductContainer;
