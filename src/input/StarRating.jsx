import React from 'react';
import Star from "./Star.jsx";
import fetchJSON from "../fetchJSON.js";
import * as ReactDOM from "react-dom";
import Notification from "./Notification.jsx";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hoveredId: -1 };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onMouseOver(e, id){
    this.setState( {hoveredId: id} );
  }

  onMouseOut(e){
    this.setState({hoveredId: -1});
  }

  onClick(e, id){
    const newRating = (++id + this.props.product.rating ) / 2;
    fetchJSON(`/set-product-rating?productId=${this.props.product.id}&rating=${newRating}`, () => {
      ReactDOM.render(<Notification text="Вы успешно оценили товар! Рейтинг будет изменен после перезагрузки страницы." />, document.getElementById('notifications') );
    });
  }

  render() {
    const { rating, id } = this.props.product;
    const { hoveredId } = this.state;
    let isHalfStarExist = false;
    let stars = [];
    if(rating) {
      let star;
      for (let i = 0; i < 5; i++) {
        if (i < rating - 1) {
          star = <Star fill={ i <= hoveredId ? '#E0CA00' : '#7F6FE3' } onClick={this.onClick} isHovered={ i<= hoveredId } fillWidth="100%" id={i} gradientId={id} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} />;
        } else if(!isHalfStarExist){
          star = <Star fill={ i <= hoveredId ? '#E0CA00' : '#7F6FE3' } onClick={this.onClick} isHovered={ i<= hoveredId } fillWidth={((rating - Math.floor(rating)) * 100) + '%'} id={i} gradientId={id+'1'} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} />;
          isHalfStarExist = true;
        }
        else star = <Star fill={ i <= hoveredId ? '#E0CA00' : 'white' } onClick={this.onClick}  isHovered={ i<= hoveredId } fillWidth="100%" id={i} gradientId={id} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} />;
        stars.push(star);
      }
    }
    return stars;
  }
}


export default StarRating;
