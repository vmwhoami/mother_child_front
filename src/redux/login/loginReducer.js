import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginActionTypes';

const initial = {
  user: null,
  loggedIn: false,
  failure: null,
  errors: false,

};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, errors: false, loggedIn: true, user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state, errors: true, loggedIn: false, failure: action.payload,
      };

    case LOGOUT:
      return initial;
    default:
      return state;
  }
};
export default loginReducer;
