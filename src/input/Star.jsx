import React from 'react';

class Star extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#2E0094" strokeWidth=".5px">
              <linearGradient id={`linear-gradient-${this.props.fillWidth}`}>
                <stop offset={this.props.fillWidth} stopColor={this.props.fill}/>
                <stop offset="0%" stopColor="white"/>
              </linearGradient>
              <path fill={`url(#linear-gradient-${this.props.fillWidth})`} d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
    );
  }
}


export default Star;
