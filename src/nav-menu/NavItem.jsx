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
      <div className="nav-item" onMouseOver={(event) => this.props.onMouseOver(event, this.props.subcategories)} onMouseOut={((event) => { this.props.onMouseOut(event) })}>
        <p className="nav-label">{text}</p>
      </div>
    );
  }
}

export default NavItem;
