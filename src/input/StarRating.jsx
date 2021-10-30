import React, {useEffect, useState} from 'react';
import Star from "./Star.jsx";
import fetchJSON from "../fetchJSON.js";
import * as ReactDOM from "react-dom";
import Notification from "./notification/Notification.jsx";

function StarRating(props){
  const [hoveredItemId, setHoveredItemId] = useState(-1);

  function onMouseOver(e, id){
    setHoveredItemId(id);
  }

  function onMouseOut(e){
    setHoveredItemId(-1);
  }

  function onClick(e, id){
    const newRating = (++id + props.product.rating ) / 2;
    fetchJSON(`/set-product-rating?productId=${props.product.id}&rating=${newRating}`, () => {
      ReactDOM.render(<Notification text="Вы успешно оценили товар! Рейтинг будет изменен после перезагрузки страницы." />, document.getElementById('notifications') );
    });
  }

    const { rating, id } = props.product;
    let isHalfStarExist = false;
    let stars = [];
    if(rating) {
      let star;
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          star = <Star fill={ i <= hoveredItemId ? '#E0CA00' : '#7F6FE3' } onClick={onClick} isHovered={ i<= hoveredItemId } fillWidth="100%" id={i} gradientId={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />;
        } else if(!isHalfStarExist){
          star = <Star fill={ i <= hoveredItemId ? '#E0CA00' : '#7F6FE3' } onClick={onClick} isHovered={ i<= hoveredItemId } fillWidth={((rating - Math.floor(rating)) * 100) + '%'} id={i} gradientId={id+'1'} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />;
          isHalfStarExist = true;
        }
        else star = <Star fill={ i <= hoveredItemId ? '#E0CA00' : 'white' } onClick={onClick}  isHovered={ i<= hoveredItemId } fillWidth="100%" id={i} gradientId={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />;
        stars.push(star);
      }
    }
    return stars;
}


export default StarRating;
