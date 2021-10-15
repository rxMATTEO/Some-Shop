import React from "react";
import Header from "../../header/Header.jsx";
import NavMenu from "../../nav-menu/NavMenu.jsx";
import "../../index.sass";
import Footer from "../../footer/Footer.jsx";

class NotFound extends React.Component{
  render() {
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
}

export default NotFound;