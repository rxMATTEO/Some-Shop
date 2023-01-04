import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import BannerItem from './BannerItem.jsx';
import ArrowButton from "../input/arrow-button/ArrowButton.jsx";
import Carousel from "../input/carousel/Carousel.jsx";
import "./banner.sass";

function Banner() {
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth.toString());
  useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(window.innerWidth.toString());
    }
    window.addEventListener('resize', changeWindowWidth);
  }, [windowWidth]);

  useEffect(() => setItems([
    <BannerItem key={1} style={{ backgroundColor: 'red' }} />,
    <BannerItem key={2} style={{ backgroundColor: 'blue' }} />,
    <BannerItem key={3} style={{ backgroundColor: 'yellow' }} />
  ]), []);

  return (
    <Carousel offset={window.innerWidth.toString()} items={items} style={{marginTop: "20px"}} />
  );
}

export default Banner;
