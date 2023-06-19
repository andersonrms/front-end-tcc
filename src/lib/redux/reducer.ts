import { combineReducers } from 'redux';

import { authReducer as auth, AUTH_STORE_KEY } from './modules/auth';

export default combineReducers({
  [AUTH_STORE_KEY]: auth,
});
