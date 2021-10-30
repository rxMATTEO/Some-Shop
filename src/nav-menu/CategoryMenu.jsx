import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CategoryItem from "./CategoryItem.jsx";
import Subcategory from "./Subcategory.jsx";

function CategoryMenu(props){
  const [hoveredItem, setHoveredItem] = useState({});

  function onSubCategoryMouseOver(e, item) {
    setHoveredItem(item);
  }

  function getHoveredItemOrFirst(){
    if(Object.keys(hoveredItem).length === 0){
      return props.subcategories[0];
    }
    return hoveredItem;
  }

// todo remove inline styles
  const { subcategories } = props;
  return (
    <div className="category-menu" onMouseLeave={e => props.mouseLeave(e)} style={{ display: props.visibility }} onMouseOut={(e) => props.onMouseOut(e, () => setHoveredItem({}))}>
      <div className="subcategories">
        {
          subcategories?.map((item) => <Subcategory onMouseOver={onSubCategoryMouseOver} item={item} />)
        }
      </div>
      <div style={{ display: "inline-block", padding: "0 20px 20px 0" }}>
        {
          getHoveredItemOrFirst()?.product?.map(
            (item) => <CategoryItem imgSrc={item.imgSrc} header={item.header.split(',')[0]} brands={item.brands} api={item.header.split(',')[1]}/>
          )
        }
      </div>
    </div>
  );
}

export default CategoryMenu;
