import React from 'react';
import ReactDOM from 'react-dom';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }

  render() {
    const { text } = this.state;
    return (
      <div className="navItem">
        <p className="navLabel">{text}</p>
      </div>
    );
  }
}

export default NavItem;