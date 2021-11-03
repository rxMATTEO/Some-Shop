import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header/Header.jsx";
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import Banner from "../../components/banner/Banner.jsx";
import PopularProductContainer from "../../components/popular-product/PopularProductContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import RecentlyViewed from "../../components/recently-viewed/RecentlyViewed.jsx";


function Main() {
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

export default Main;
