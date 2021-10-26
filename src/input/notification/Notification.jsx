import React from 'react';
import "./notification.sass";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  componentDidMount() {
    this.timerId = setTimeout( () => { this.setState({ isVisible: false })}, this.props.cooldown );
  }

  render() {
    if(this.state.isVisible) {
      return (
        <div className="notification">
          <div className="notification__close" onClick={ (e) => { this.setState({ isVisible: false }); clearTimeout(this.timerId) } }>x</div>
          <p className="notification__text">{this.props.text}</p>
        </div>
      );
    }
    return null;
  }
}

Notification.defaultProps = { cooldown: 5000 };

export default Notification;
