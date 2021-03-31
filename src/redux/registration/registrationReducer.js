import {
  REGISTRATION_SUCCESS, REGISTER_FAILURE, CLEAR_ERRORS, NAVSWITCH,
} from './registrationActTypes';

const initial = {
  user: null,
  errors: [],
  navbar: false,
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
    default:
      return state;
  }
};

export default registrationReducer;
