import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
    const { className, text } = props;
    return (
      <div className={className} onClick={props.onClick}>
        <p className="button-label">{text}</p>
      </div>
    );
}

export default Button;
