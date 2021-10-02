import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar.jsx";
import Button from "../input/Button.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search content">
        <SearchBar />
        <Button className={"searchButton"} text={"Найти"}/>
      </div>
    );
  }
}

export default Search;