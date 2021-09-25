import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  render() {
    const { offset } = this.props;
    return (
      <div className="carousel" style={{ right: offset }}>
        { this.props.children }
      </div>
    );
  }
}

export default Carousel;
