import React from 'react';
import ReactDOM from 'react-dom';

function CategoryItem(props){
  return (
    <a className="category-item" href={"/subcategory/" + props.api.toLowerCase()}>
      <img src={props.imgSrc} className="item-img" alt={props.header}/>
      <div className="category-products">
        <p className="category-header">{props.header}</p>
        {
          props.brands?.map(
          item => <a className="brand" href={`/${props.api.toLowerCase()}/${item.toLowerCase()}`}>{item}</a>
        )}
      </div>
    </a>
  );
}

export default CategoryItem;
