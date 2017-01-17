import React, { Component, PropTypes } from 'react';


class SignUpForm extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {newUser : {}};
    this.onSubmit = ::this.onSubmit;
  }

  clearInput() {
    this.setState({user : {}});
  }

  handleChange(propertyName, event) {
      const newUser = this.state.newUser;
      newUser[propertyName] = event.target.value;
      this.setState({newUser: newUser });
  }

  onSubmit(event) {
    event.preventDefault();
    const login = this.state.newUser.email.trim();
    const password = this.state.newUser.password.trim();
    const passwordConfirmation = this.state.newUser.passwordConfirmation.trim();
    if (password.length && password === passwordConfirmation) 
      this.props.signUp(login, password);
  }

  render() {
    return (
      <div id="login">
        <form className="login-form" onSubmit={this.onSubmit}>
          <span className="fa fa-user"></span>
          <input
            autoFocus
            maxLength="25"
            onChange={this.handleChange.bind(this, 'email')}
            placeholder="Email"
            type="email"
            value={this.state.newUser.email}
            required
          />
          <span className="fa fa-lock"></span>
          <input
            autoComplete="off"
            maxLength="8"
            onChange={this.handleChange.bind(this, 'password')}
            placeholder="Password"
            type="password"
            value={this.state.newUser.password}
            required
          />
          <span className="fa fa-lock"></span>
          <input
            autoComplete="off"
            maxLength="8"
            onChange={this.handleChange.bind(this, 'passwordConfirmation')}
            placeholder="Confirm your Password"
            type="password"
            value={this.state.newUser.passwordConfirmation}
            required
          />
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
