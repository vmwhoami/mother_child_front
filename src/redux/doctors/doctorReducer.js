import { DOCTORS_SUCCESS, DOCTORS_FAILURE, SELECTED_DOCTOR } from './doctorActTypes';

const initial = {
  doctors: [],
  errors: false,
  loading: true,
  selected: null,
};
const doctorReducer = (state = initial, action) => {
  switch (action.type) {
    case DOCTORS_SUCCESS:
      return { ...state, doctors: action.payload, loading: false };
    case DOCTORS_FAILURE:
      return { ...state, errors: true, loading: false };
    case SELECTED_DOCTOR:

      return { ...state, selected: state.doctors.filter((doc) => doc.id === action.payload)[0] };
    default:
      return state;
  }
};

export default doctorReducer;
