import React, { Component, PropTypes } from 'react';


class LoginForm extends Component {
  static propTypes = {
    signInWithLoginAndPassword: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {user : {}};
    this.onSubmit = ::this.onSubmit;
  }

  clearInput() {
    this.setState({user : {}});
  }

  handleChange(propertyName, event) {
      const user = this.state.user;
      user[propertyName] = event.target.value;
      this.setState({user: user });
  }

  onSubmit(event) {
    event.preventDefault();
    const login = this.state.user.email.trim();
    const password = this.state.user.password.trim();
    if (login.length && password.length) this.props.signInWithLoginAndPassword(login, password);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <input
          autoFocus
          className="login-form__input"
          maxLength="25"
          onChange={this.handleChange.bind(this, 'email')}
          placeholder="Email"
          type="email"
          value={this.state.user.email}
          required
        />

        <input
          autoComplete="off"
          className="login-form__input"
          maxLength="8"
          onChange={this.handleChange.bind(this, 'password')}
          placeholder="Password"
          type="password"
          value={this.state.user.password}
          required
        />

        <button className="btn sign-in__button submit" type="submit">Log in</button>
      </form>
    );
  }
}

export default LoginForm;
