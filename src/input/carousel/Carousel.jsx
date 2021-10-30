import React, {useCallback, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import ArrowButton from "../arrow-button/ArrowButton.jsx";
import "./carousel.sass";

function Carousel(props){
  let [right, setRight] = useState(0);
  const [transition, setTransition] = useState("");
  let oldPosition = 0;
  const zero = useRef(0);
  let maxWidth = 0;

   function onLeftArrowClick() {
     setRight(
       prev => {
         const width = props.offset;
         const widthWithItem = +prev - +width;
         setTransition("right .5s ease-in-out");
         if (widthWithItem >= 0) {
           return widthWithItem;
         }
         return 0;
       }
     );
   }

  //todo change duplicates
  function onRightArrowClick() {
    setRight(
      prev => {
        const width = props.offset;
        const widthWithItem = +prev + +width;
        setTransition("right .5s ease-in-out");
        if (widthWithItem < maxWidth) {
          return widthWithItem;
        }
        return 0;
      }
    );
  }

  let possibleRight = [];
  for (let i = 0; i < props.items.length; i++){
    possibleRight.push(i * props.offset);
  }

  function onMouseDown(e){
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp, { once: true });
    setTransition("none");
    oldPosition = (e.pageX);
    zero.current = (e.pageX + +right);
  }

  function onMouseMove(e){
    const x = zero.current - e.pageX;
    if((x > maxWidth - props.offset) || (x <= 0 && right <= 0)) return;
    setRight(x);
  }

  function onMouseUp(e){
    setRight( prev => {
      e.target.onclick = (e) => {
        if (e.pageX !== oldPosition) e.preventDefault();
      };
      window.removeEventListener('mousemove', onMouseMove);

      const correctRightIndex = possibleRight.findIndex( item => prev < item );

      while(prev >= props.offset){
        prev -= props.offset;
      }
      let index;
      if(prev >= props.offset / 2){
        index = possibleRight[correctRightIndex];
      }
      else {
        index = possibleRight[correctRightIndex - 1];
        if(isNaN(index)) return;
      }
      return index;
    });
  }

    maxWidth = props.items.length * props.offset;
    const leftArrow = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>);
    const rightArrow = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>);
    let style = Object.assign({}, props.style);
    style.width = props.width;
    return (
      <div className="banner" style={style} onMouseDown={ onMouseDown }>
        <ArrowButton text={leftArrow} onClick={ onLeftArrowClick } />
        <div className="carousel" style={{ right: right, transition: transition, width: maxWidth }}>
          { props.items }
        </div>
        <ArrowButton text={rightArrow} style="right" onClick={ onRightArrowClick } />
      </div>
    );
}

Carousel.defaultProps = {
  width: '100%',
  style: {}
}

export default Carousel;
