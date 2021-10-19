import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: props.className, text: props.text };
  }

  render() {
    const cN = this.state.className;
    const text = this.state.text;
    return (
      <div className={cN} onClick={this.props.onClick}>
        <p className="button-label">{text}</p>
      </div>
    );
  }
}

export default Button;
