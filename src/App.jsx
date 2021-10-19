import React from 'react';
import Main from "./pages/main/Main.jsx";
import Product from "./pages/product/Product.jsx";
import HoverToolTip from "./input/HoverToolTip.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./pages/not-found/NotFound.jsx";
import ProductCatalog from "./pages/product-catalog/ProductCatalog.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products/:id" exact component={Product} />
          <Route path="/category/:categoryName" component={ProductCatalog} />
          <Route path="/:subcategory/:brand" component={ProductCatalog} />
          <Route path="/subcategory/:subcategoryName" component={ProductCatalog} />
          <Route path="/products/:productId/brand/:brandId" component={ProductCatalog}/>
          <Route component={NotFound} />
        </Switch>
        <HoverToolTip />
      </Router>
    );
  }
}

export default App;
