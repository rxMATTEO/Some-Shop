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

  getHoveredItemOrFirst(){
    if(Object.keys(this.state.hoveredItem).length === 0){
      return this.props.subcategories[0];
    }
    return this.state.hoveredItem;
  }

// todo remove inline styles

  render() {
    const { subcategories } = this.props;
    return (
      <div className="category-menu" onMouseLeave={e => this.props.mouseLeave(e)} style={{ display: this.props.visibility }} onMouseOut={(e) => this.props.onMouseOut(e, () => this.setState({hoveredItem: {}}))}>
        <div className="subcategories">
          {
            subcategories?.map((item) => <Subcategory onMouseOver={this.onSubCategoryMouseOver} item={item} />)
          }
        </div>
        <div style={{ display: "inline-block", padding: "0 20px 20px 0" }}>
          {
            this.getHoveredItemOrFirst()?.product?.map(
              (item) => <CategoryItem imgSrc={item.imgSrc} header={item.header.split(',')[0]} brands={item.brands} api={item.header.split(',')[1]}/>
            )
          }
        </div>
      </div>
    );
  }
}

export default CategoryMenu;
