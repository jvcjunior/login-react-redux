import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/login-form';
import { authActions } from 'src/core/auth';


export function SignIn({signInWithGithub, signInWithGoogle, signInWithTwitter}) {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Sign in</h1>
        <LoginForm/>
        
        <ul className="sign-in__actions">
            <li><a onClick={signInWithGithub} className="link link-github"></a></li>
            <li><a onClick={signInWithGoogle} className="link link-google"></a></li>
            <li><a onClick={signInWithTwitter} className="link link-twitter"></a></li>
          </ul>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignIn);
