import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';
import { createSelector } from 'reselect';

import { getAlert, alertActions } from 'src/core/alerts';
import Alert from '../../components/alert';
import LoginForm from '../../components/login-form';


export class SignIn extends Component{
  
  constructor(props) {
    super(props);
  }

  static propTypes = {
    signInWithLoginAndPassword: PropTypes.func.isRequired,
    signInWithGithub: PropTypes.func.isRequired,
    signInWithGoogle: PropTypes.func.isRequired,
    signInWithTwitter: PropTypes.func.isRequired,
    signInWithFacebook: PropTypes.func.isRequired,
    alert: PropTypes.object.isRequired,
    dismissAlert: PropTypes.func.isRequired
  };

  renderAlert() {
    const { alert } = this.props;
    return (
      <Alert
        dismiss={this.props.dismissAlert}
        display={alert.display}
        message={alert.message}
      />
    );
  }


  render() {
    return (
      <div className="container">
          <LoginForm signInWithLoginAndPassword={this.props.signInWithLoginAndPassword.bind(this)}/>
          
          <div className="sign-up__actions clearfix">
            <p>Not a member? <a href="/sign-up">Sign up now</a><span className="fa fa-arrow-right"></span></p>
          </div> 

          <div className="sign-in__actions clearfix">
            <ul>
                <li><a onClick={this.props.signInWithGithub.bind(this)} className="link link-github"></a></li>
                <li><a onClick={this.props.signInWithGoogle.bind(this)} className="link link-google"></a></li>
                <li><a onClick={this.props.signInWithTwitter.bind(this)} className="link link-twitter"></a></li>
                <li><a onClick={this.props.signInWithFacebook.bind(this)} className="link link-facebook"></a></li>
            </ul>
          </div>

          {this.props.alert.display ? this.renderAlert() : null}
      </div>
    );
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getAlert,
  (alert) => ({alert})
);

const mapDispatchToProps = Object.assign(
  {},
  authActions,
  alertActions
);

//export default connect(null, authActions)(SignIn);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
