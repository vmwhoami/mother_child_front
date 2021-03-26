import { DOCTORS_SUCCESS, DOCTORS_FAILURE } from './doctorActTypes';

const initial = {
  doctors: [],
  errors: false,
};
const doctorReducer = (state = initial, action) => {
  switch (action.type) {
    case DOCTORS_SUCCESS:
      return { ...state, doctors: action.payload };
    case DOCTORS_FAILURE:
      return { ...state, errors: true };
    default:
      return state;
  }
};

export default doctorReducer;
