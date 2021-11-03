import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header.jsx";
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import "./product-page.sass";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ReactDOM from "react-dom";
import NotFoundPage from "../not-found/NotFoundPage.jsx";
import HoverToolTip from "../../components/input/tooltip/HoverToolTip.jsx";
import Footer from "../../components/footer/Footer.jsx";
import fetchJSON from "../../fetchJSON.js";
import BuyLayout from "../../components/input/BuyLayout.jsx";
import Star from "../../components/input/Star.jsx";
import StarRating from "../../components/input/StarRating.jsx";
import userClient from "../../user/userClient.js";

function ProductPage(props){
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [brand, setBrand] = useState({});
  const [user, setUser] = useState({});

  useEffect( () => {
    fetchJSON(props.location.pathname, async (result) =>{
      setProduct(result);
      setMainImage(result.imagePath.split(';')[0]);
      fetchJSON(`/set-product-view?productId=${result.id}&views=${++result.viewsCount}`);
      const user = await userClient.getCurrentUser();
      if(user) {
        setUser(user);
        fetchJSON(`/append-view-to-history?userId=${user.user.id}&productId=${result.id}`);
      }
    });
    fetchJSON(`/brands?id=${props.match.params.id}`, (result) =>
    {
      setBrand(result);
    });
  },[product.id]);

  function onMiniatureMouseOver(e, imagePath, index){
    const bigImage = product.imagePath.split(';')[index];
    setMainImage(bigImage);
  }
  useEffect( () => {
      if (product.name) document.title = product.name;
    }
  )
    let miniatures = product.miniatures;
    if(miniatures){
      miniatures = miniatures.split(';').map( (item, index) => {
        return (
          <div className="image-miniatures__image" key={index}>
            <img src={item} onMouseOver={(e) => onMiniatureMouseOver(e, e.target.src, index)} />
          </div>);
      } );
    }
    return (
      <div>
        <Header />
        <NavMenu />
        <div className="content product">
          <div className="product-header">
            {product.name}
          </div>
          <div className="product__title">
            <div className="title__image-miniatures">
              {
                miniatures
              }
            </div>
            <div className="title__main-image">
              <img src={mainImage} />
            </div>
            <div className="title__top">
              <span className="top__text">{"12400 dpi, светодиодный, USB, кнопки - 6 подробнее"}</span>
              <BuyLayout product={product} />
              <div className="top__stars">
                <StarRating product={product} />
              </div>
            </div>
            <div className="right-logo">
              <a className="right-logo__logo" href={"/products/" + product.id + "/brand/" + brand.id}>
                <img src={brand.imagePath} height="100%" width="100px" data-tooltip={"Перейти на страницу " + brand.name} alt={brand.name}/>
              </a>
            </div>
          </div>
          <div className="product__middle">
            <p className="middle__header">
              {"Описание " + product.name}
            </p>
            {product.description}
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default ProductPage;
