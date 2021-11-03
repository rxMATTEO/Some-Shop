import React from 'react';
import ReactDOM from 'react-dom';

function InfoLink(props) {
    const { link, text } = props;
    return (
      <a href={link} className="info-link">{text}</a>
    );
}

export default InfoLink;
