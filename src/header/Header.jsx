import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info.jsx';
import Search from './Search.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-nav">
        <Info />
        <Search />
      </div>
    );
  }
}

export default Header;
