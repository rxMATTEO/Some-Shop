import React from 'react';
import ReactDOM from 'react-dom';

function Subcategory(props){
    return (
      <a href={'/category/' + props.item.categoryName.split(',')[1].toLowerCase()} className="subcategory" onMouseOver={
        (event) => props.onMouseOver(event, props.item) }>{props.item.categoryName.split(',')[0]}
      </a>
    );
}

export default Subcategory;
