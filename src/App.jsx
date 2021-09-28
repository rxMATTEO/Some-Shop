import React from 'react';
import ReactDOM from 'react-dom';
import Info from './header/Info.jsx';
import Header from './header/Header.jsx';
import NavMenu from "./navMenu/NavMenu.jsx";
import Banner from "./banner/Banner.jsx";
import PopularProductContainer from "./popularProduct/PopularProductContainer.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <Banner />
        <PopularProductContainer />
      </div>
    );
  }
}

export default App;
