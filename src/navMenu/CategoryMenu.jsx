import React from 'react';
import ReactDOM from 'react-dom';
import CategoryItem from "./CategoryItem.jsx";
import Subcategory from "./Subcategory.jsx";

class CategoryMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onSubCategoryMouseOver = this.onSubCategoryMouseOver.bind(this);
    this.state = { hoveredItem: {} };
  }

  onSubCategoryMouseOver(event, item) {
    this.setState({ hoveredItem: item });
  }

// todo remove inline styles

  render() {
    const { subcategories } = this.props;
    return (
      <div className="categoryMenu" style={{ display: this.props.visibility }} onMouseOut={(e) => this.props.onMouseOut(e)}>
        <div className="subCategories">
          {
            subcategories?.map((item) => <Subcategory onMouseOver={this.onSubCategoryMouseOver} item={item} />)
          }
        </div>
        <div style={{ display: "inline-block", padding: "0 20px 20px 0" }}>
          {
            this.state.hoveredItem.product?.map(
              (item) => <CategoryItem imgSrc={item.imgSrc} header={item.header} brands={item.brands} />
            )
          }
        </div>
      </div>
    );
  }
}

export default CategoryMenu;
