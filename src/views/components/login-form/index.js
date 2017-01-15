import React, { Component, PropTypes } from 'react';


class LoginForm extends Component {
  static propTypes = {
    //createTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {login: '', password:''};

    //this.onChange = ::this.onChange;
    //this.onKeyUp = ::this.onKeyUp;
    //this.onSubmit = ::this.onSubmit;
  }

  //clearInput() {
  //  this.setState({title: ''});
  //}

  //onChange(event) {
  //  this.setState({title: event.target.value});
  //}

  //onKeyUp(event) {
  //  if (event.keyCode === 27) {
  //    this.clearInput();
  //  }
  //}

  onSubmit(event) {
    event.preventDefault();
    const login = this.state.login.trim();
    const password = this.state.password.trim();
    //if (title.length) this.props.createTask(title);
    //this.clearInput();
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className="login-form__input"
          maxLength="25"
          placeholder="Login"
          type="text"
          value={this.state.login}
        />

        <input
          autoComplete="off"
          className="login-form__input"
          maxLength="8"
          placeholder="Password"
          type="password"
          value={this.state.password}
        />

        <button className="btn sign-in__button submit" type="submit">Log in</button>
      </form>
    );
  }
}

export default LoginForm;
