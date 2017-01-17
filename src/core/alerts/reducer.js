import { Record } from 'immutable';
import { SIGN_IN_ERROR, SIGN_UP_ERROR } from 'src/core/auth';
import { DISMISS_ALERT } from './action-types';


export const AlertState = new Record({
  actionLabel: '',
  display: false,
  message: ''
});


export function alertReducer(state = new AlertState(), action) {
  switch (action.type) {
    case SIGN_IN_ERROR:
      return state.merge({
        actionLabel: 'Undo',
        display: true,
        message: action.payload.message
      });
    case SIGN_UP_ERROR:
      return state.merge({
        actionLabel: 'Undo',
        display: true,
        message: action.payload.message
      });  

    case DISMISS_ALERT:
      return new AlertState();

    default:
      return new AlertState();
  }
}
