import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.onSearch)
    return (
      <input type="search" className="searchbar" onChange={ (e) => this.props.onSearch(e) } />
    );

    return <input type="search" className="searchbar"/>;
  }
}

export default SearchBar;