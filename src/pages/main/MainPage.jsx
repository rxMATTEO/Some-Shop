import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Header from "../../components/header/Header.jsx";
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Product from "../../components/product/Product.jsx";
import LoadingScreen from "../../components/input/loading-screen/LoadingScreen.jsx";


function MainPage() {
  const PopularProductContainer = React.lazy(() => import("../../components/popular-product/PopularProductContainer.jsx"));
  const RecentlyViewed = React.lazy(() => import("../../components/recently-viewed/RecentlyViewed.jsx"));
  return (
    <Suspense fallback={<LoadingScreen />}>
        <Header />
        <NavMenu />
        <Banner />
        <PopularProductContainer />
        <RecentlyViewed />
        <Footer />
    </Suspense>
  );
}

export default MainPage;
