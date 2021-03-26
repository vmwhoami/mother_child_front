import { DOCTORS_SUCCESS, DOCTORS_FAILURE } from './doctorActTypes';

const initial = {
  doctors: [],
  errors: false,
  loading: true,
};
const doctorReducer = (state = initial, action) => {
  switch (action.type) {
    case DOCTORS_SUCCESS:
      return { ...state, doctors: action.payload, loading: false };
    case DOCTORS_FAILURE:
      return { ...state, errors: true, loading: false };
    default:
      return state;
  }
};

export default doctorReducer;
