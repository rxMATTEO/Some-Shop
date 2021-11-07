import React, {useEffect, useState} from 'react';
import Star from "./Star.jsx";
import fetchJSON from "../../fetchJSON.js";
import * as ReactDOM from "react-dom";
import Notification from "./notification/Notification.jsx";
import {connect} from "react-redux";
import {addNotification, addProduct, removeProduct} from "../../redux/actions/actions.js";

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
      props.addNotification("Вы успешно оценили товар! Рейтинг будет изменен после перезагрузки страницы.");
    });
  }

    const { rating, id } = props.product;
    let isHalfStarExist = false;
    let stars = [];
    if(rating) {
      let star;
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          star = <Star fill={ i <= hoveredItemId ? '#E0CA00' : '#7F6FE3' } onClick={onClick} key={i} isHovered={ i<= hoveredItemId } fillWidth="100%" id={i} gradientId={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />;
        } else if(!isHalfStarExist){
          star = <Star fill={ i <= hoveredItemId ? '#E0CA00' : '#7F6FE3' } onClick={onClick} key={i} isHovered={ i<= hoveredItemId } fillWidth={((rating - Math.floor(rating)) * 100) + '%'} id={i} gradientId={id+'1'} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />;
          isHalfStarExist = true;
        }
        else star = <Star fill={ i <= hoveredItemId ? '#E0CA00' : 'white' } onClick={onClick} key={i}  isHovered={ i<= hoveredItemId } fillWidth="100%" id={i} gradientId={id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />;
        stars.push(star);
      }
    }
    return stars;
}

const mapDispatchToProps = { addNotification };
const mapStateToProps = (state) => {
  return { notifications: state.notifications.notifications };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);
