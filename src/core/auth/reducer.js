import { Record } from 'immutable';
import {
  INIT_AUTH,
  START_LOGIN,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
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
