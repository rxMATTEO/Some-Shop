import React from 'react';
import ReactDOM from 'react-dom';

class InfoLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: props.link, text: props.text };
  }

  render() {
    const { link } = this.state;
    const { text } = this.state;
    return (
      <a href={link} className="info-link">{text}</a>
    );
  }
}

export default InfoLink;
