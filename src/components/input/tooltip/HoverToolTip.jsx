import React, {useEffect, useState} from 'react';
import "./tooltip.sass";

function HoverToolTip(props){
  const [isVisible, setVisibility] = useState(false);
  const [coords, setCoords] = useState({});
  const [text, setText] = useState("");
  const [rotate, setRotate] = useState(0);

  // todo return remove event listener
  useEffect( () => {
    document.addEventListener('mouseover', (e) => {
      const tooltip = e.target.dataset.tooltip;
      if(tooltip){
        const rect = e.target.getBoundingClientRect();
        setVisibility(true);
        setText(tooltip);
        let coords = { top: ( e.clientY ) };
        if(document.body.offsetWidth - rect.left < 250){
          coords.left = e.clientX - 280;
          coords.top -= e.target.offsetHeight / 2;
          coords.top += pageYOffset;
          setRotate(180);
        }
        else coords.left = e.clientX + e.target.offsetWidth;
        setCoords(coords);
      }
      else setVisibility(false);
    });
  },[]);

    if(isVisible) {
      return (
        <div className="arrowToolTip" style={{left: coords.left, top: coords.top, opacity: 1, transform: `rotate(${rotate}deg)`}}>
          <div className="triangle"/>
          <div className="ttBody" style={{transform: `rotate(${rotate}deg)`, borderRadius: rotate === 180 ? "5px 0 0 5px" : "0 5px 5px 0"}}>{text}</div>
        </div>
      );
    }
    return null;
}

export default HoverToolTip;
