import { Record } from 'immutable';
import {
  INIT_AUTH,
  START_LOGIN,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_EMAIL_PASSWORD_SUCCESS,
  SIGN_OUT_SUCCESS,
  START_SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
} from './action-types';


export const AuthState = new Record({
  loading: false,
  authenticated: false,
  id: null
});


export function authReducer(state = new AuthState(), {payload, type}) {
  switch (type) {
    case START_LOGIN:
      return state.merge({
        loading: true
      });
    case SIGN_IN_ERROR:
      return state.merge({
        loading: false
      });
    case START_SIGN_UP:
      return state.merge({
        loading: true
      });
    case SIGN_UP_ERROR:
      return state.merge({
        loading: false
      });  
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      return state.merge({
        loading: false,
        authenticated: !!payload,
        id: payload ? payload.uid : null
      });
    case SIGN_OUT_SUCCESS:
      return new AuthState();

    default:
      return state;
  }
}
