import React, {useEffect, useState} from 'react';
import "./notification.sass";

function Notification(props){
  const [isVisible, setVisibility] = useState(true);
  const [opacity, setOpacity] = useState("1");
  let _timerId;

  useEffect( () => {
    new Promise((resolve) => {
      setTimeout(() => resolve(), props.cooldown);
    }).then(resolve => {
        onClose();
      }
    );
  })

  function onClose(){
    new Promise( (resolve) => {
      resolve();
    }).then( resolve => {
      setOpacity("0");
      _timerId = setTimeout(() => setVisibility(false), 1000);
    });
    return () => clearTimeout(_timerId);
  }

  if(isVisible) {
    return (
      <div className="notification" style={{opacity: opacity}}>
        <div className="notification__close" onClick={onClose}>x</div>
        <p className="notification__text">{props.text}</p>
      </div>
    );
  }
  return null;
}

Notification.defaultProps = { cooldown: 5000 };

export default Notification;
