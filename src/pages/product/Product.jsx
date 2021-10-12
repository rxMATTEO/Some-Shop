import React from 'react';
import Header from "../../header/Header.jsx";
import NavMenu from "../../nav-menu/NavMenu.jsx";
import "./index.sass";
import "../../index.sass";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <div className="content product">
          <div className="product-header">
            {this.props.header}
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
              <img src="https://c.dns-shop.ru/thumb/st1/fit/500/500/cdb0ed2b7ed3fb3fb19c25ae7c303f55/c9749f32779e959f9d6363c645a25a1cf14c27f17c2a445b6618b16fd3d85941.jpg" />
            </div>
            <div className="title__top">
              <span className="top__text">{this.props.title}</span>
              <div className="top__layout">
                <div className="layout__text">
                  <span>{this.props.price}</span>
                </div>
                <div className="layout__button">
                  <span className="button__text">Купить</span>
                </div>
              </div>
            </div>
            <div className="right-logo">
              <a className="right-logo__logo" href="#">
                <img src={this.props.productLogo} height="50px" width="50px" data-tooltip="a" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
