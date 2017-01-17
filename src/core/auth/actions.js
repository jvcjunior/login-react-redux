import firebase from 'firebase';
import { firebaseAuth } from 'src/core/firebase';
import {
  INIT_AUTH,
  START_LOGIN,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  START_SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
} from './action-types';


function authenticateWithProvider(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}

function authenticateWithEmailAndPassword(email, password) {
  return dispatch => {
    
    dispatch({type: START_LOGIN});
    
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(result => dispatch(signInEmailPasswordSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}

function createUserWithEmailAndPassword(email, password) {
  return dispatch => {
    
    dispatch({type: START_SIGN_UP});
    
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(result => dispatch(signUpSuccess(result)))
      .catch(error => dispatch(signUpError(error)));
  };
}

export function initAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}

export function signInSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result.user
  };
}

export function signInEmailPasswordSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  };
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    payload: error
  };
}

export function signUpSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  };
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(email, password);
}

export function signInWithLoginAndPassword(email, password) {
  return authenticateWithEmailAndPassword(email, password);
}

export function signInWithGithub() {
  return authenticateWithProvider(new firebase.auth.GithubAuthProvider());
}


export function signInWithGoogle() {
  return authenticateWithProvider(new firebase.auth.GoogleAuthProvider());
}


export function signInWithTwitter() {
  return authenticateWithProvider(new firebase.auth.TwitterAuthProvider());
}


export function signInWithFacebook() {
  return authenticateWithProvider(new firebase.auth.FacebookAuthProvider());
}

export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}
