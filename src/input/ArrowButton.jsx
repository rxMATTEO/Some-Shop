import React from 'react';
import ReactDOM from 'react-dom';

class ArrowButton extends React.Component {
  render() {
    const style = this.props.style ? this.props.style : "";
    const { onClick } = this.props;
    return (
      <div style={{padding: "5px", borderRadius: "5px", backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} className={"arrow-button " + style} onClick={onClick} >
        { this.props.text }
      </div>
    );
  }
}

export default ArrowButton;
