import { LOGIN_SUCCESS, LOGIN_FAILURE } from './loginActionTypes';

const initial = {
  user: null,
  loggedIn: false,
};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export default loginReducer;
