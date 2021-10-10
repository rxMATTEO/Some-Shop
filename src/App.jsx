import React from 'react';
import Main from "./pages/Main.jsx";
import Product from "./pages/product/Product.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Product header="Мышь проводная ZET GAMING Prime черный" title="12400 dpi, светодиодный, USB, кнопки - 6 подробнее" price="1999"/>
      </div>
    );
  }
}

export default App;
