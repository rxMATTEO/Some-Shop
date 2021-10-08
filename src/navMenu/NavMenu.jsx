import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from "./NavItem.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import getCategoryItem from "./getCategoryItem.js";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: "none", subcategories: [], navItem: {} };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver(e, items) {
    this.setState({ visibility: 'block' });
    e.target.closest('.nav-item').style.backgroundColor = "#C569F0";
    if(e.target.closest('.nav-item')) this.setState({navItem: e.target.closest('.nav-item')});
    this.setState({ subcategories: items });
  }

  onMouseOut(e, callback) {
    if (e.relatedTarget && !e.relatedTarget.closest('.categoryMenu')) {
      this.setState({ visibility: 'none' });
      if (e.target.closest('.nav-item')) e.target.closest('.nav-item').style.backgroundColor = "#7F6FE3";
      if(callback) callback();
    }
  }
  //todo remove class names ands background colors to variables
  render() {
    const pcParts = [
      getCategoryItem('Комплектующие для ПК', [ {imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/9f2382f80196fe69081442ae4995c60d/b70d20da48dfebda15c88f04044237bfa6234fe05d539ff68a61395785620202.jpg', header: 'Процессоры', brands: ['Intel', 'AMD']},
        {imgSrc: 'https://c.dns-shop.ru/thumb/st4/fit/220/150/4aa1adddbd68bd0ac0739fff47327355/114d29cfe20f17933bac65e17c2edf53aeb4d5db5a0d683b5191195099eb437c.jpg', header: 'Материнские платы', brands: ['Gigabyte', 'ASUS', 'MSI']},
        {imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/be5b6c66e33224d6d712ad4c3b0f5f44/809d70b81f66d3f730c567c442e3ad98baeef227e15b2413dd3b0ca2c4afeca0.jpg', header: 'Видеокарты', brands: ['Palit', 'Gigabyte', 'MSI']}]),
      getCategoryItem('Ноутбуки', [ {imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/87ed6552e39aabcdddf89e767830c9c6/320a8e4b8a3227de8d22213d06e5804d890240c1461f614983570d175a0de9f2.jpg', header: 'Игровые ноутбуки', brands: ['ASUS', 'MSI', 'OMEN']}])
    ];
    const appliances = [
      getCategoryItem('Техника для кухни', [ {imgSrc: 'https://c.dns-shop.ru/thumb/st4/fit/220/150/0a09f6b0a3ba8b952f184999aae62ec2/2252f632365bda05431a61498a99b847b303e5ea3ade88a799fb9a6a7795e558.png', header: 'Холодильное оборудование', brands: ['Beko', 'Samsung']} ])
    ];
    const tvs = [
      getCategoryItem('Телевизоры', [ {imgSrc: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/810c9a092de66e75ef788b94005f1faa/35027b8070857159ea00154bba5513557a8e2b0d52723b160984494f2150e5b2.jpg', header: 'Телевизоры', brands: ['LG', 'Samsung', 'Phillips']} ])
    ];
    const phones = [
      getCategoryItem('Смартфоны', [ {imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/341d0847688b64d0ef79f391d8dc1e0b/91b384bd6d56f835dfb5c7974c430ff6be88200a29145acd983e6e7ac2d2c220.jpg', header: 'Смартфоны', brands: ['Samsung', 'Apple', 'Xiaomi']}])
    ];
    const house = [
      getCategoryItem('Мебель', [ {imgSrc: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/2d695e9726c7f92ef43565be5d73b3e3/d55dbfc898132a67c120e06da88b49f3c5d1c3bc0f00d807c4921343778cc9b1.jpg', header: 'Мебель', brands: ['Belezza', 'Mona Liza']} ])
    ];
    const { visibility, subcategories } = this.state;
    return (
      <div className="nav-menu">
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={pcParts} text="Каталог товаров" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={pcParts} text="Компьютерная техника" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={appliances} text="Бытовая техника" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={tvs} text="Телевизоры" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={phones} text="Смартфоны" />
        <NavItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} subcategories={house} text="Товары для дома" />
        <CategoryMenu mouseLeave={() => this.state.navItem.style.backgroundColor = "#7F6FE3"} visibility={visibility} subcategories={subcategories} onMouseOut={this.onMouseOut} />
      </div>
    );
  }
}

export default NavMenu;
