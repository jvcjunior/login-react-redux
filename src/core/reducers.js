import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { alertReducer } from './alerts';


export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  routing: routerReducer
});
