import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info.jsx';
import Search from './Search.jsx';
import "./header.sass";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Info />
        <Search />
      </div>
    );
  }
}

export default Header;
