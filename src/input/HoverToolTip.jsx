import React from 'react';

function HoverToolTip (){
    document.addEventListener('mouseover', function (e){
      if(e.target.dataset.tooltip){
      }
    });
    return null;
}

export default HoverToolTip;
