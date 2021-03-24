import { REGISTRATION_SUCCESS, REGISTER_FAILURE } from './registrationActTypes';

const initial = {
  user: null,
  errors: false,
};
const registrationReducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, errors: true };
    default:
      return state;
  }
};

export default registrationReducer;
