import ProductRow from "../../components/input/ProductRow.jsx";
import Header from "../../components/header/Header.jsx";
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import React from "react";
import {connect} from "react-redux";
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import fetchJSON from "../../fetchJSON.js";

function BucketPage(props){
  return (
    <div>
      <Header />
      <NavMenu />
      <div style={{padding: "20px 5px"}}>
        {
          props.products.map((item) => {
            return <ProductRow imgSrc={item.imagePath} id={item.id} header={item.name} price={item.price} rating={item.rating} />
          })
        }
      </div>
    </div>
  );
}
const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketPage);
