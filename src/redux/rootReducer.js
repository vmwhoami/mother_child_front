import { combineReducers } from 'redux';
import registrationReducer from './registration/registrationReducer';

const rootReducer = combineReducers({ registrationReducer });

export default rootReducer;
