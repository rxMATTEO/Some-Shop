import React from 'react';
import ReactDOM from 'react-dom';

function NavItem(props){
    const { text } = props;
    return (
      <div className="nav-item" onMouseOver={(event) => props.onMouseOver(event, props.subcategories)} onMouseOut={((event) => { props.onMouseOut(event) })}>
        <p className="nav-label">{text}</p>
      </div>
    );
}

export default NavItem;
