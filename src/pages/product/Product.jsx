import React from 'react';
import Header from "../../header/Header.jsx";
import NavMenu from "../../nav-menu/NavMenu.jsx";
import "./product-page.sass";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ReactDOM from "react-dom";
import NotFound from "../not-found/NotFound.jsx";
import HoverToolTip from "../../input/tooltip/HoverToolTip.jsx";
import Footer from "../../footer/Footer.jsx";
import fetchJSON from "../../fetchJSON.js";
import BuyLayout from "../../input/BuyLayout.jsx";
import Star from "../../input/Star.jsx";
import StarRating from "../../input/StarRating.jsx";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, mainImage: "", brand: {}, user: {}, isToolTipVisible: false };
    fetchJSON(this.props.location.pathname, (result) =>{
      this.setState({ product: result });
      this.setState({ mainImage: result.imagePath.split(';')[0] });
      fetchJSON(`/set-product-view?productId=${result.id}&views=${++result.viewsCount}`);
      fetchJSON(`/get-user?token=${localStorage.getItem('token')}`, (user) => {
        if(!user || !result) return;
        this.setState({user: user.user});
        fetchJSON(`/append-view-to-history?userId=${user.user.id}&productId=${result.id}`);
      });
    });
    fetchJSON(`/brands?id=${this.props.match.params.id}`, (result) =>
    {
      this.setState({ brand: result });
    });
  }

  onMiniatureMouseOver(e, imagePath, index){
    const bigImage = this.state.product.imagePath.split(';')[index];
    this.setState({mainImage: bigImage});
  }

  render() {
    if(this.state.product.name) document.title = this.state.product.name;
    let miniatures = this.state.product.miniatures;
    if(miniatures){
      miniatures = miniatures.split(';').map( (item, index) => {
        return (<div className="image-miniatures__image" key={index}>
          <img src={item} onMouseOver={(e) => this.onMiniatureMouseOver(e, e.target.src, index)} />
        </div>);
      } );
    }
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
              {
                miniatures
              }
            </div>
            <div className="title__main-image">
              <img src={this.state.mainImage} />
            </div>
            <div className="title__top">
              <span className="top__text">{"12400 dpi, светодиодный, USB, кнопки - 6 подробнее"}</span>
              <BuyLayout price={this.state.product.price} />
              <div className="top__stars">
                <StarRating product={this.state.product} />
              </div>
            </div>
            <div className="right-logo">
              <a className="right-logo__logo" href={"/products/" + this.state.product.id + "/brand/" + this.state.brand.id}>
                <img src={this.state.brand.imagePath} height="100%" width="100px" data-tooltip={"Перейти на страницу " + this.state.brand.name} alt={this.state.brand.name}/>
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
