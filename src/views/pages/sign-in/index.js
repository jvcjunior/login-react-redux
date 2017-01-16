import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/login-form';
import { authActions } from 'src/core/auth';


export function SignIn({signInWithLoginAndPassword, signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithFacebook}) {
  
  return (
    <div className="container">
        <LoginForm signInWithLoginAndPassword={signInWithLoginAndPassword}/>
        
        <div className="sign-up__actions clearfix">
          <p>Not a member? <a href="/sign-up">Sign up now</a><span className="fa fa-arrow-right"></span></p>
        </div> 

        <div className="sign-in__actions clearfix">
          <ul>
              <li><a onClick={signInWithGithub} className="link link-github"></a></li>
              <li><a onClick={signInWithGoogle} className="link link-google"></a></li>
              <li><a onClick={signInWithTwitter} className="link link-twitter"></a></li>
              <li><a onClick={signInWithFacebook} className="link link-facebook"></a></li>
          </ul>
        </div>
    </div>
  );
}

SignIn.propTypes = {
  signInWithLoginAndPassword: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired,
  signInWithFacebook: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignIn);
