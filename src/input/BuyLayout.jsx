import React from "react";
import "../pages/product/product-page.sass";

class BuyLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top__layout">
        <div className="layout__text">
          <span>{this.props.price}</span>
        </div>
        <div className="layout__button">
          <span className="button__text">Купить</span>
        </div>
      </div>
    );
  }
}

export default BuyLayout;
