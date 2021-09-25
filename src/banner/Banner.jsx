import React from 'react';
import ReactDOM from 'react-dom';
import BannerItem from './BannerItem.jsx';
import ArrowButton from "../input/ArrowButton.jsx";
import Carousel from "../input/Carousel.jsx";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { right: 0 };
    this.state.bannerItems = [
      <BannerItem style={{ backgroundColor: 'red' }} />,
      <BannerItem style={{ backgroundColor: 'blue' }} />];
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
  }

  onLeftArrowClick() {
    const { right } = this.state;
    if (right - 1920 >= 0) {
      this.setState({ right: right - 1920 });
    }
  }

  onRightArrowClick() {
    const maxWidth = this.state.bannerItems.length * 1920;
    const { right } = this.state;
    if(right + 1920 < maxWidth) {
      this.setState({ right: right + 1920 });
    }
  }

  render() {
    const { right } = this.state;
    return (
      <div className="banner">
        <ArrowButton text="<-" onClick={this.onLeftArrowClick} />
        <Carousel offset={right}>
          {this.state.bannerItems}
        </Carousel>
        <ArrowButton text="->" style="right" onClick={this.onRightArrowClick} />
      </div>
    );
  }
}

export default Banner;
