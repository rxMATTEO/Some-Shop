import ProductRow from "../../components/input/ProductRow.jsx";
import Header from "../../components/header/Header.jsx";
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import fetchJSON from "../../fetchJSON.js";
import "./bucket-page.sass"
import BucketItem from "./BucketItem.jsx";
import HorizontalLine from "../../components/input/horizontal-line/HorizontalLine.jsx";
import Footer from "../../components/footer/Footer.jsx";
import userClient from "../../user/userClient.js";
import * as ReactDOM from "react-dom";
import Notification from "../../components/input/notification/Notification.jsx";

function BucketPage(props){
  let summ = 0;
  let quantity = 0;
  return (
    <div>
      <Header />
      <NavMenu />
      <div className="product-catalog content">
        <div className="product-catalog__header">
          Ваша корзина
        </div>
        <div style={{width: "40%", display: "inline-block"}}>
          <div>
            {
              props.products?.length && props.products.map((product) => {
                summ += product.price;
                quantity++;
                return <BucketItem product={product} key={product.id} />
              }) || "Ваша корзина пуста!"
            }
          </div>
        </div>
        <div style={{paddingLeft: "20px"}} className="product-catalog__right">
          <div className="right__summary">
            <div className="summary__button">Оформить заказ</div>
            <div className="summary__bottom">
              Ваша корзина
              <span className="bottom__right">
                {quantity + " товара"}
              </span>
            </div>
            <HorizontalLine />
            <div className="summary__bottom">
              Общая стоимость
              <span className="bottom__right price">
                {summ}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
  return { products: state.bucket.products };
};
export default connect(mapStateToProps, mapDispatchToProps)(BucketPage);

