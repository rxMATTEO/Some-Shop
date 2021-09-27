import React from 'react';
import ReactDOM from 'react-dom';

class Subcategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="#" className="subCategory" onMouseOver={ (event) => this.props.onMouseOver(event, this.props.item) }>{this.props.item.categoryName}</a>
    );
  }
}

export default Subcategory;
