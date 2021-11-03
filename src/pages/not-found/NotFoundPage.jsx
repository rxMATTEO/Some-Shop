import React from "react";
import Header from "../../components/header/Header.jsx";
import NavMenu from "../../components/nav-menu/NavMenu.jsx";
import Footer from "../../components/footer/Footer.jsx";

function NotFoundPage(props){
    return(
      <div>
        <Header />
        <NavMenu />
        <div className="content">
          Простите, страница не найдена
        </div>
        <Footer />
      </div>
    );
}

export default NotFoundPage;
