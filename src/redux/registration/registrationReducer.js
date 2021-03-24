import { REGISTRATION_SUCCESS, REGISTER_FAILURE } from './registrationActTypes';

const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default registrationReducer;
