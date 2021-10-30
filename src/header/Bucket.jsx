import React from 'react';
import ReactDOM from 'react-dom';

function Bucket(props) {
    const { text, iconPath } = props;
    return (<div className="bucket">
      {iconPath}
      <p className="bucket-text">{text}</p>
    </div>);
}
export default Bucket;
