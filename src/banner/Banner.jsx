import React from 'react';
import ReactDOM from 'react-dom';
import BannerItem from './BannerItem.jsx';
import ArrowButton from "../input/ArrowButton.jsx";
import Carousel from "../input/Carousel.jsx";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bannerItems: [
      <BannerItem style={{ backgroundColor: 'red' }} />,
      <BannerItem style={{ backgroundColor: 'blue' }} />,
      <BannerItem style={{ backgroundColor: 'yellow' }} />
    ]};
  }

  render() {
    return (
        <Carousel offset={window.innerWidth} items={this.state.bannerItems} />
    );
  }
}

export default Banner;
