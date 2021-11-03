import React, {useEffect, useState} from 'react';
import "./notification.sass";

function Notification(props){
  const [isVisible, setVisibility] = useState(true);
  let _timerId;

  useEffect( () => {
    const timerId = setTimeout( () => { setVisibility(false)}, props.cooldown );
    _timerId = timerId;
    return () => clearTimeout(timerId);
    }
  );

  if(isVisible) {
    return (
      <div className="notification">
        <div className="notification__close" onClick={(e) => {
          setVisibility(false);
          clearTimeout(_timerId);
        }}>x</div>
        <p className="notification__text">{props.text}</p>
      </div>
    );
  }
  return null;
}

Notification.defaultProps = { cooldown: 5000 };

export default Notification;
