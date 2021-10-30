import React, {useEffect} from 'react';
import Main from "./pages/main/Main.jsx";
import Product from "./pages/product/Product.jsx";
import HoverToolTip from "./input/tooltip/HoverToolTip.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./pages/not-found/NotFound.jsx";
import ProductCatalog from "./pages/product-catalog/ProductCatalog.jsx";
import getRandomToken from "./getRandomToken.js";
import fetchJSON from "./fetchJSON.js";

function App(props){
  useEffect(() => {
    if(!localStorage.getItem("token")){
      const token = getToken();
      localStorage.setItem("token", token);
      fetchJSON(`/create-user?token=${token}`);
    }
  });

  function getToken(){
    const token = getRandomToken();
    fetchJSON(`/get-user?token=${token}`, (user) => {
      while (true) {
        if (user.user !== null) getToken();
        else break;
      }
    });
    return token;
  }

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
      <div id="notifications" />
    </Router>
  );
}

export default App;
