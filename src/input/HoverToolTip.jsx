import React from 'react';

class HoverToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vis: false, text: "",coords: {},rotate: 0 };
    document.addEventListener('mouseover', (e) => {
      const tooltip = e.target.dataset.tooltip;
      if(tooltip){
        const rect = e.target.getBoundingClientRect();
        this.setState({ vis: true, text: tooltip});
        let coords = { top: (rect.top + e.target.offsetHeight / 2) };
        if(document.body.offsetWidth - rect.left < 250){
          coords.left = rect.left - 250;
          coords.top -= e.target.offsetHeight / 2;
          this.setState({rotate: 180});
        }
        else coords.left = rect.left + e.target.offsetWidth;
        this.setState({coords: coords});
      }
      else this.setState({vis: false});
    });
  }

  render() {
    if(this.state.vis) {
      const coords = this.state.coords;
      return (
        <div className="arrowToolTip" style={{left: coords.left, top: coords.top, opacity: 1, transform: `rotate(${this.state.rotate}deg)`}}>
          <div className="triangle"/>
          <div className="ttBody" style={{transform: `rotate(${this.state.rotate}deg)`}}>{this.state.text}</div>
        </div>
      );
    }
    return null;
  }
}

export default HoverToolTip;
