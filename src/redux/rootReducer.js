import { combineReducers } from 'redux';
import registrationReducer from './registration/registrationReducer';
import loginReducer from './login/loginReducer';

const rootReducer = combineReducers({ registrationReducer, loginReducer });

export default rootReducer;
