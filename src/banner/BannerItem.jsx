import React from 'react';
import ReactDOM from 'react-dom';

class BannerItem extends React.Component {
  render() {
    return (
      <div className="bannerItem" style={this.props.style} />
    );
  }
}

export default BannerItem;