import React from 'react';
import ReactDOM from 'react-dom';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="category-item" href={"/subcategory/" + this.props.api.toLowerCase()}>
        <img src={this.props.imgSrc} className="item-img" alt={this.props.header}/>
        <div className="category-products">
          <p className="category-header">{this.props.header}</p>
          {
            this.props.brands?.map(
            item => <a className="brand" href={`/${this.props.api.toLowerCase()}/${item.toLowerCase()}`}>{item}</a>
          )}
        </div>
      </a>
    );
  }
}

export default CategoryItem;
