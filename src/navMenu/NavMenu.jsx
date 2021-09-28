import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from "./NavItem.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import getCategoryItem from "./getCategoryItem.js";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: "none", subcategories: [] };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(e, items) {
    this.setState({ visibility: 'block' });
    this.setState({ subcategories: items });
  }

  onMouseOut(e) {
    if (e.relatedTarget && !e.relatedTarget.closest('.categoryMenu')) {
      this.setState({ visibility: 'none' });
    }
  }

  render() {
    const category = [
      getCategoryItem('Холодильники', [ {imgSrc: 'https://pbs.twimg.com/media/EgnQ8M7XgAA0kJv.jpg', header: 'Random content', brands: ['a', 'b', 'c']}, {imgSrc: 'https://pbs.twimg.com/media/EgnQ8M7XgAA0kJv.jpg', header: 'Random content', brands: ['a', 'b', 'c']} ]),
      getCategoryItem('Морозильники', [ {imgSrc: 'https://pbs.twimg.com/media/EgnQ8M7XgAA0kJv.jpg', header: 'h', brands: ['a', 'b', 'c']}])
    ];
    const { visibility, subcategories } = this.state;
    return (
      <div className="navMenu">
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={category} text="Каталог товаров" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={category} text="Компьютерная техника" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={category} text="Бытовая техника" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={category} text="Телевизоры" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={category} text="Смартфоны" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={category} text="Товары для дома" />
        <CategoryMenu visibility={visibility} subcategories={subcategories} onMouseOut={this.onMouseOut} />
      </div>
    );
  }
}

export default NavMenu;
