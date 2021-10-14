import React from 'react';
import Main from "./pages/main/Main.jsx";
import Product from "./pages/product/Product.jsx";
import HoverToolTip from "./input/HoverToolTip.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./pages/not-found/NotFound.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/product">
            <Product header="Мышь проводная ZET GAMING Prime черный" title="12400 dpi, светодиодный, USB, кнопки - 6 подробнее" price="1999" productLogo="https://c.dns-shop.ru/thumb/st1/fit_width/110/110/ebf8d30981a63648c141f2ffede1bed4/0ecc79878c1e8cc8aaa3ca58fdefeab1f649d4af1dc62aa45ca7db7e9b3e25c2.png"/>
          </Route>
          <Route component={NotFound} />
        </Switch>
        <HoverToolTip />
      </Router>
    );
  }
}

export default App;
