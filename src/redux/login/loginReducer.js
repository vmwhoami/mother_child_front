import { LOGIN_SUCCESS, LOGIN_FAILURE } from './loginActionTypes';

const initial = {
  user: null,
  loggedIn: false,
  failure: null,
};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loggedIn: false, failure: action.payload };
    default:
      return state;
  }
};
export default loginReducer;
