import React from 'react';

function Star(props){
  const { fill, id, gradientId, isHovered, fillWidth } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#2E0094" strokeWidth=".5px"
         onMouseOut={ (e) =>{ props.onMouseOut(e); } } onMouseOver={ (e) => { props.onMouseOver(e, id); } }
         onClick={(e) => props.onClick(e,id)}>
      <linearGradient id={`linear-gradient${gradientId + '+' + id}`}>
        <stop offset={isHovered ? '100%' : fillWidth} stopColor={fill}/>
        <stop offset="0%" stopColor="white"/>
      </linearGradient>
      <path fill={`url(#linear-gradient${gradientId + '+' + id})`} d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
    </svg>
  );
}


export default Star;
