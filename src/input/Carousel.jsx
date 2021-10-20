import React from 'react';
import ReactDOM from 'react-dom';
import ArrowButton from "./ArrowButton.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { right: 0, transition: "", maxWidth: this.props.items.length * this.props.offset, oldPosition: 0 };

    const possibleRight = [];
    for (let i = 0; i < this.props.items.length; i++){
      possibleRight.push(i * this.props.offset);
    }
    this.possibleRight = possibleRight;

    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }
  onLeftArrowClick() {
    const { right } = this.state;
    const width = this.props.offset;
    const widthWithItem = right - width;
    this.setState({ transition: "right .5s ease-in-out" });
    if (widthWithItem >= 0) {
      this.setState({ right: widthWithItem });
    }
  }

  onRightArrowClick() {
    const width = this.props.offset;
    const maxWidth = this.state.maxWidth;
    const { right } = this.state;
    const widthWithItem = +right + +width;
    this.setState( { transition: "right .5s ease-in-out" });
    if (widthWithItem < maxWidth) {
      this.setState({ right: widthWithItem });
    }
  }

  onMouseDown(e){
    this.setState({ transition: "none" });
    this.setState({ oldPosition: e.pageX });
    this.func = (e) => this.onMouseMove(e);
    this.setState({ zero: e.pageX + this.state.right });
    window.addEventListener('mousemove', this.func);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove(e){
    const x = this.state.zero - e.pageX;
    if((x > this.state.maxWidth - this.props.offset) || (x <= 0 && this.state.right <= 0)) return;
    this.setState({ right: x });
  }

  onMouseUp(e){
    e.target.onclick = (e) => {
      if(e.pageX !== this.state.oldPosition) e.preventDefault();
    };
    window.removeEventListener('mousemove', this.func);
    let { right } = this.state;
    const correctRightIndex = this.possibleRight.findIndex( item => right < item );
    while(right >= this.props.offset){
      right -= this.props.offset
    }
    let index;
    if(right >= this.props.offset / 2){
      index = this.possibleRight[correctRightIndex];
    }
    else {
      index = this.possibleRight[correctRightIndex - 1];
      if(isNaN(index)) return;
    }
      this.setState({ right: index });
  }

  render() {
    const { right } = this.state;
    const leftArrow = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>);
    const rightArrow = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>);
    let style = Object.assign({},this.props.style);
    style.width = this.props.width;
    return (
      <div className="banner" style={style} onMouseDown={ this.onMouseDown }>
        <ArrowButton text={leftArrow} onClick={ this.onLeftArrowClick } />
        <div className="carousel" style={{ right: right, transition: this.state.transition, width: this.state.maxWidth }}>
          { this.props.items }
        </div>
        <ArrowButton text={rightArrow} style="right" onClick={this.onRightArrowClick} />
      </div>
    );
  }
}

Carousel.defaultProps = {
  width: '100%',
  style: {}
}

export default Carousel;
