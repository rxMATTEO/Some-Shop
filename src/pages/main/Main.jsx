import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../header/Header.jsx";
import NavMenu from "../../nav-menu/NavMenu.jsx";
import Banner from "../../banner/Banner.jsx";
import PopularProductContainer from "../../popular-product/PopularProductContainer.jsx";
import Footer from "../../footer/Footer.jsx";
import RecentlyViewed from "../../recently-viewed/RecentlyViewed.jsx";


class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <Banner />
        <PopularProductContainer />
        <RecentlyViewed />
        <Footer />
      </div>
    );
  }
}

export default Main;
