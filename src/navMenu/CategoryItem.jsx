import React from 'react';
import ReactDOM from 'react-dom';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="categoryItem">
        <img src={this.props.imgSrc} className="itemImg" alt={this.props.header}/>
        <div className="categoryProducts">
          <p className="categoryHeader">{this.props.header}</p>
          {
            this.props.brands?.map(
            item => <a className="brand" href="#">{item}</a>
          )}
        </div>
      </div>
    );
  }
}

export default CategoryItem;
