// Root Reducer — combines all reducers (mirrors sample-React-project/src/store.js pattern)
import { combineReducers } from 'redux';
import AuthReducer  from './AuthReducer';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
  auth:    AuthReducer,
  profile: ProfileReducer,
});

export default rootReducer;
