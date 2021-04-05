import { combineReducers } from 'redux';
import registrationReducer from './registration/registrationReducer';
import loginReducer from './login/loginReducer';
import doctorReducer from './doctors/doctorReducer';
import appointReducer from './appointments/appointReducer';

const rootReducer = combineReducers({
  registrationReducer,
  loginReducer,
  doctorReducer,
  appointReducer,
});

export default rootReducer;
