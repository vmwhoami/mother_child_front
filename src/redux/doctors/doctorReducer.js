import {
  DOCTORS_SUCCESS,
  DOCTORS_FAILURE,
  SELECTED_DOCTOR,
  FILTER,
  INCREMENT,
  DECREMENT,
  SET_INDEX,
  ZERO_INDEX,
} from './doctorActTypes';

const initial = {
  doctors: [],
  errors: false,
  loading: true,
  selected: null,
  filter: 'All',
  index: 0,
};
const doctorReducer = (state = initial, action) => {
  switch (action.type) {
    case DOCTORS_SUCCESS:
      return { ...state, doctors: action.payload, loading: false };
    case DOCTORS_FAILURE:
      return { ...state, errors: true, loading: false };
    case FILTER:
      return { ...state, filter: action.payload, loading: false };
    case SELECTED_DOCTOR:
      return { ...state, selected: state.doctors.filter((doc) => doc.id === action.payload)[0] };
    case INCREMENT:
      return { ...state, index: state.index + 1 };
    case DECREMENT:
      return { ...state, index: state.index - 1 };
    case SET_INDEX:
      return { ...state, index: action.payload };
    case ZERO_INDEX:
      return { ...state, index: 0 };
    default:
      return state;
  }
};

export default doctorReducer;
