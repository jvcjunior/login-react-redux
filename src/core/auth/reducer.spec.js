import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';

import { authReducer } from './reducer';


describe('Auth reducer', () => {
  describe('INIT_AUTH', () => {
    it('AuthState.authenticated is going to be false when payload is null', () => {
      let state = authReducer(undefined, {
        type: INIT_AUTH,
        payload: null
      });

      expect(state.authenticated).toBe(false);
      expect(state.id).toBe(null);
    });

    it('AuthState.authenticated is going to be true when payload provided', () => {
      let state = authReducer(undefined, {
        type: INIT_AUTH,
        payload: {uid: '123'}
      });

      expect(state.authenticated).toBe(true);
      expect(state.id).toBe('123');
    });
  });


  describe('SIGN_IN_SUCCESS', () => {
    it('AuthState.authenticated true when SIGN_IN_SUCCESS', () => {
      let state = authReducer(undefined, {
        type: SIGN_IN_SUCCESS,
        payload: {uid: '123'}
      });

      expect(state.authenticated).toBe(true);
      expect(state.id).toBe('123');
    });
  });


  describe('SIGN_OUT_SUCCESS', () => {
    it('AuthState.authenticated  false when SIGN_OUT_SUCCESS', () => {
      let state = authReducer(undefined, {
        type: SIGN_OUT_SUCCESS
      });

      expect(state.authenticated).toBe(false);
      expect(state.id).toBe(null);
    });
  });
});
