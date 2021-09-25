import React from 'react';
import ReactDOM from 'react-dom';

class ArrowButton extends React.Component {
  render() {
    const style = this.props.style ? this.props.style : "";
    const { onClick } = this.props;
    return (
      <div onClick={onClick} className={"arrowButton " + style} role="button">{ this.props.text }</div>
    );
  }
}

export default ArrowButton;
