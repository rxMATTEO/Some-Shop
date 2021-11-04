import React from 'react';
import ReactDOM from 'react-dom';
import {addProduct, removeProduct} from "../../redux/actions/actions.js";
import {connect} from "react-redux";

function Button(props) {
    const { className, text } = props;
    return (
      <div className={className} onClick={props.onClick}>
        <p className="button-label">{text}</p>
      </div>
    );
}
const mapDispatchToProps = { addProduct, removeProduct };
const mapStateToProps = (state) => {
  return { products: state.products };
};
export default connect(mapStateToProps, mapDispatchToProps)(Button);
