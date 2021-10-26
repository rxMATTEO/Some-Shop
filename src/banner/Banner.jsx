import React from 'react';
import ReactDOM from 'react-dom';
import BannerItem from './BannerItem.jsx';
import ArrowButton from "../input/arrow-button/ArrowButton.jsx";
import Carousel from "../input/carousel/Carousel.jsx";
import "./banner.sass";

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
        <Carousel offset={window.innerWidth} items={this.state.bannerItems} style={{marginTop: "20px"}} />
    );
  }
}

export default Banner;
