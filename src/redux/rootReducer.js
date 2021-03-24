import { combineReducers } from 'redux';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({ usersReducer });

export default rootReducer;
