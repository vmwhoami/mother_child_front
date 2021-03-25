import { REGISTRATION_SUCCESS, REGISTER_FAILURE, CLEAR_ERRORS } from './registrationActTypes';

const initial = {
  user: null,
  errors: [],
};
const registrationReducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, errors: action.payload };
    case CLEAR_ERRORS:
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default registrationReducer;
