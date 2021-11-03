import React from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from "react-router-dom";
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import {connect} from "react-redux";

function Bucket(props) {
    const { iconPath, products } = props;
    const history = useHistory();
    return (
      <a className="bucket" onClick={ () => history.push("/bucket")} href="/bucket">
        {iconPath}
        <p className="bucket-text">{products?.length > 0 ? `В корзине ${products.length} товаров` : "Корзина пуста" }</p>
      </a>
    );
}
const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
    return { products: state.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bucket);
