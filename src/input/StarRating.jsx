import React from 'react';
import Star from "./Star.jsx";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rating } = this.props;
    let stars = [];
    if(rating) {
      for (let i = 0; i < 5; i++) {
        if (i < rating - 1) {
          stars.push(<Star fill="#E0CA00" fillWidth="100%"/>);
        } else {
          const fillWidth = (rating - Math.floor(rating)) * 100;
          stars.push(<Star fill="#E0CA00" fillWidth={fillWidth + '%'}/>);
          for (let j = i; j < 4; j++) {
            stars.push(<Star fill="#E0CA00" fillWidth="0%"/>);
          }
          break;
        }
      }
    }
    return stars;
  }
}


export default StarRating;
