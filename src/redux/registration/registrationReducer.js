import {
  REGISTRATION_SUCCESS, REGISTER_FAILURE, CLEAR_ERRORS, NAVSWITCH, REDIRECT, CLEAR_REDIRECT,
} from './registrationActTypes';

const initial = {
  user: null,
  errors: [],
  navbar: true,
  redirect: false,
};
const registrationReducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, errors: action.payload };
    case CLEAR_ERRORS:
      return { ...state, errors: [] };
    case NAVSWITCH:
      return { ...state, navbar: !state.navbar };
    case REDIRECT:
      return { ...state, redirect: true };
    case CLEAR_REDIRECT:
      return { ...state, redirect: false, user: null };
    default:
      return state;
  }
};

export default registrationReducer;
