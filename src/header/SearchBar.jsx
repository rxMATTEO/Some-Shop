import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="search" className="searchbar" />
    );
  }
}

export default SearchBar;
