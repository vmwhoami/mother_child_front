import { combineReducers } from 'redux';
import registrationReducer from './registration/registrationReducer';
import loginReducer from './login/loginReducer';
import doctorReducer from './doctors/doctorReducer';

const rootReducer = combineReducers({ registrationReducer, loginReducer, doctorReducer });

export default rootReducer;
