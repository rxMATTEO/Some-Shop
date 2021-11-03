import React from 'react';
import ReactDOM from 'react-dom';
import "./arrow-button.sass";

function ArrowButton(props) {
  const style = props.style ?? "";
  const { onClick } = props;
  return (
    // todo remove inline style
    <div style={{padding: "5px", borderRadius: "5px", backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} className={"arrow-button " + style} onClick={onClick} >
      { props.text }
    </div>
  );
}

export default ArrowButton;
