import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from "../input/carousel/Carousel.jsx";
import Product from "../product/Product.jsx";
import fetchJSON from "../../fetchJSON.js";
import "./product.sass";
import userClient from "../../user/userClient.js";

function RecentlyViewed() {
    const [products, setProducts] = useState([]);

  useEffect( () => {
    async function fetchProducts(){
      const user = await userClient.getCurrentUser();
      if(!user) return;
      const viewHistory = await fetchJSON(`/get-view-history?userId=${user.user.id}`);
      const productArray = [];
      for (let i = 0; i < viewHistory.length; i++) {
        const product = await fetchJSON('/products/' + viewHistory[i].productId);
        productArray.push(product);
      }
      setProducts(productArray);
    }
      fetchProducts();
  }, []);

    return (
      <div className="content">
        <p className="container-label">Вы недавно смотрели</p>
        <div className="popular-product-container">
          <Carousel style={{padding: "0 0 5px 5px"}} offset="270" items={products.map( (product, index) => <Product imgSrc={product.imagePath} price={product.price} desc={product.name} key={index} id={product.id} /> )} />
        </div>
      </div>
    );
}
export default RecentlyViewed;
