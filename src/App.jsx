import React, {useEffect} from 'react';
import MainPage from "./pages/main/MainPage.jsx";
import ProductPage from "./pages/product/ProductPage.jsx";
import HoverToolTip from "./components/input/tooltip/HoverToolTip.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFoundPage from "./pages/not-found/NotFoundPage.jsx";
import ProductCatalog from "./pages/product-catalog/ProductCatalog.jsx";
import getRandomToken from "./getRandomToken.js";
import fetchJSON from "./fetchJSON.js";
import {Provider, connect} from "react-redux";
import * as redux from 'redux';
import {bucketReducer} from "./redux/reducers/reducers.js";
import Bucket from "./pages/bucket/BucketPage.jsx";
import BucketPage from "./pages/bucket/BucketPage.jsx";
import ProductRow from "./components/input/ProductRow.jsx";
import userClient from "./user/userClient.js";

function App(props){
  useEffect(async () => {
    if(!localStorage.getItem("token")){
      const token = await getToken();
      localStorage.setItem("token", token);
      fetchJSON(`/create-user?token=${token}`);
    }
  });

  async function getToken(){
    let token = getRandomToken();
    const user = await userClient.getCurrentUser();
    if (user !== null) return getToken();
    return token;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/search/:query" component={(props) => (<ProductCatalog location={{pathname: "/search?query=" + props.match.params.query}} />)} />
        <Route path="/products/:id" exact component={ProductPage} />
        <Route path="/category/:categoryName" component={ProductCatalog} />
        <Route path="/:subcategory/:brand" component={ProductCatalog} />
        <Route path="/subcategory/:subcategoryName" component={ProductCatalog} />
        <Route path="/products/:productId/brand/:brandId" component={ProductCatalog} />
        <Route path="/bucket" component={BucketPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <HoverToolTip />
      <div id="notifications" />
    </Router>
  );
}

export default App;
