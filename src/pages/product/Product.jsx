import React from 'react';
import Header from "../../header/Header.jsx";
import NavMenu from "../../nav-menu/NavMenu.jsx";
import "./product.sass";
import "../../index.sass";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ReactDOM from "react-dom";
import NotFound from "../not-found/NotFound.jsx";
import HoverToolTip from "../../input/HoverToolTip.jsx";
import Footer from "../../footer/Footer.jsx";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, brand: {}, isToolTipVisible: false };
    this.fetchData();
  }

  fetchData(){
    fetch("http://localhost:3000/products/" + this.props.match.params.id, {
      method: "GET"
    }).then( res => {
      if(res.status === 404){
        ReactDOM.render(<NotFound />, document.getElementById('root'));
        return;
      }
      return res.json();
    }).then( (res) => {
      this.setState({product: res});
    });
    fetch(`http://localhost:3000/products?brand=${this.props.match.params.id}`, {method: "GET"})
      .then(
        res => {
          if(res.status === 404){
            ReactDOM.render(<NotFound />, document.getElementById('root'));
            return;
          }
          return res.json();
        }
      ).then(
        res => {
          this.setState({brand: res});
        }
    )
  }

  render() {
    if(this.state.product.name) document.title = this.state.product.name;
    return (
      <div>
        <Header />
        <NavMenu />
        <div className="content product">
          <div className="product-header">
            {this.state.product.name}
          </div>
          <div className="product__title">
            <div className="title__image-miniatures">
              <div className="image-miniatures__image">
                <img src="https://c.dns-shop.ru/thumb/st1/fit/45/45/5baa26a916b271418488a0b81fdced69/4038b4e507b66173dd267448d723310adb5a55bbcdab6113b724102424674ed9.jpg" />
              </div>
              <div className="image-miniatures__image">
                <img src="https://c.dns-shop.ru/thumb/st1/fit/45/45/5baa26a916b271418488a0b81fdced69/4038b4e507b66173dd267448d723310adb5a55bbcdab6113b724102424674ed9.jpg" />
              </div>
              <div className="image-miniatures__image">
                <img src="https://c.dns-shop.ru/thumb/st1/fit/45/45/5baa26a916b271418488a0b81fdced69/4038b4e507b66173dd267448d723310adb5a55bbcdab6113b724102424674ed9.jpg" />
              </div>
              <div className="image-miniatures__image">
                <img src="https://c.dns-shop.ru/thumb/st1/fit/45/45/5baa26a916b271418488a0b81fdced69/4038b4e507b66173dd267448d723310adb5a55bbcdab6113b724102424674ed9.jpg" />
              </div>
              <div className="image-miniatures__image">
                <img src="https://c.dns-shop.ru/thumb/st1/fit/45/45/5baa26a916b271418488a0b81fdced69/4038b4e507b66173dd267448d723310adb5a55bbcdab6113b724102424674ed9.jpg" />
              </div>
            </div>
            <div className="title__main-image">
              <img src={this.state.product.imagePath} />
            </div>
            <div className="title__top">
              <span className="top__text">{"12400 dpi, светодиодный, USB, кнопки - 6 подробнее"}</span>
              <div className="top__layout">
                <div className="layout__text">
                  <span>{this.state.product.price}</span>
                </div>
                <div className="layout__button">
                  <span className="button__text">Купить</span>
                </div>
              </div>
            </div>
            <div className="right-logo">
              <a className="right-logo__logo" href="#">
                <img src={this.state.brand.imagePath} height="100%" width="100px" data-tooltip={"Перейти на страницу " + this.state.brand.name}/>
              </a>
            </div>
          </div>
          <div className="product__middle">
            <p className="middle__header">
              {"Описание " + this.state.product.name}
            </p>
            {this.state.product.description}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;
