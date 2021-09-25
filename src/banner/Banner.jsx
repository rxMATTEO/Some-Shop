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
      <BannerItem style={{ backgroundColor: 'blue' }} />,
      <BannerItem style={{ backgroundColor: 'yellow' }} />];
    this.state.windowWidth = window.innerWidth;
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
  }

  onLeftArrowClick() {
    const { right } = this.state;
    const width = this.state.windowWidth;
    if (right - width >= 0) {
      this.setState({ right: right - width });
    }
  }

  onRightArrowClick() {
    const maxWidth = this.state.bannerItems.length * 1920;
    const width = this.state.windowWidth;
    const { right } = this.state;
    if (right + width < maxWidth) {
      this.setState({ right: right + width });
    }
  }

  render() {
    const { right } = this.state;
    const leftArrow = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>);
    const rightArrow = (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>);
    return (
      <div className="banner">
        <ArrowButton text={leftArrow} onClick={this.onLeftArrowClick} />
        <Carousel offset={right}>
          {this.state.bannerItems}
        </Carousel>
        <ArrowButton text={rightArrow} style="right" onClick={this.onRightArrowClick} />
      </div>
    );
  }
}

export default Banner;
