import React from 'react';
import ReactDOM from 'react-dom';

function SearchBar(props){
    if(props.onSearch)
        return (
          <input type="search" className="searchbar" onFocus={ (e) => props.onFocus(e) } onBlur={ (e) => props.onBlur(e) } onChange={ (e) => props.onSearch(e) } />
        );
    return <input type="search" className="searchbar" />;
}

export default SearchBar;
