import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar.jsx";
import Button from "../input/Button.jsx";
import ProductCatalog from "../../pages/product-catalog/ProductCatalog.jsx";
import {useHistory} from "react-router";

function Search(props){
  const [style, setStyle] = useState({ top: "60px",marginTop: "", boxShadow: "none" });
  const searchQuery = useRef("");

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  },[]);

  function onScroll(e){
    if(window.pageYOffset > 20){
      setStyle({ top: 0, marginTop: 0, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" });
    }
    else setStyle({ top: "60px", marginTop: "", boxShadow: "none" });
  }

  function onSearch(e){
    searchQuery.current = e.target.value;
  }

  function onSearchButtonClick(){
    const query = searchQuery.current;
    if(!query) return;
    document.location.href = '/search/' + query;
  }

  function onSearchBarFocus(){
    document.addEventListener('keydown', (e) => handleEnter(e));
  }

  function onSearchBarBlur(){
    document.removeEventListener('keydown', (e) => handleEnter(e));
  }

  function handleEnter(e){
    if (e.key === 'Enter') {
      onSearchButtonClick();
    }
  }

  return (
      //todo remove inline styles
      <div style={{display: "inline-block", height: "50px", width: "100%"}}>
        <div className="search" style={{ top: style.top, marginTop: style.marginTop, boxShadow: style.boxShadow }}>
          <div className="content" style={{display: "flex", justifyContent: "space-between", top: "10px", position: "relative", height: "10px"}}>
            <div style={{display: "inline-block", height: "100%"}}>
              <a href="/" style={{display: "inline-block", height: "inherit"}}>
                <img src="/./image.png" className="shop-logo"/>
              </a>
            </div>
            <SearchBar onFocus={ onSearchBarFocus } onBlur={ onSearchBarBlur } onSearch={ onSearch }/>
            <Button className="search-button" text="Найти" onClick={ () => onSearchButtonClick() } />
          </div>
        </div>
      </div>
    );
}

export default Search;
