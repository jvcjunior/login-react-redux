import React, { Component, PropTypes } from 'react';


class Alert extends Component {
  static propTypes = {
    type: PropTypes.number,
    dismiss: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    message: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.display) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  startTimer() {
    this.clearTimer();
    this.timerId = setTimeout(() => {
      this.props.dismiss();
    }, this.props.duration || 5000);
  }

  render() {
    return (
      <div className="alert">
        <p className="alert__message" ref={c => this.message = c}>{this.props.message}</p>
      </div>
    );
  }
}

export default Alert;
