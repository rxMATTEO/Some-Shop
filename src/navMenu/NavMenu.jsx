import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from "./NavItem.jsx";

class NavMenu extends React.Component {
  render() {
    return (
      <div className="navMenu">
        <NavItem text="Каталог товаров" />
        <NavItem text="Каталог товаров" />
        <NavItem text="Каталог товаров" />
        <NavItem text="Каталог товаров" />
        <NavItem text="Каталог товаров" />
        <NavItem text="Каталог товаров" />
      </div>
    );
  }
}

export default NavMenu;
