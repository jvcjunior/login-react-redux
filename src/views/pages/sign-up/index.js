import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/sign-up';
import { authActions } from 'src/core/auth';


export function SignUp({signUp}) {
  return (
    <div className="container">
        <SignUpForm signUp={signUp}/>
    </div>
  );
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignUp);
