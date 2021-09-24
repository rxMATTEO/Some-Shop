import React from 'react';
import ReactDOM from 'react-dom';

class Bucket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text, iconPath: props.iconPath };
  }

  render() {
    const { text } = this.state;
    const { iconPath } = this.state;
    return (
      <div className="bucket">
        <img alt="bucket" src={iconPath} />
        {text}
      </div>
    );
  }
}
export default Bucket;
