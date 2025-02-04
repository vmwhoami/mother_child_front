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

const initialState = {
  doctors: [],
  errors: false,
  loading: true,
  selected: null,
  filter: 'All',
  index: 0,
};

const actionHandlers = {
  [DOCTORS_SUCCESS]: (state, action) => ({
    ...state,
    doctors: action.payload.map(doctor => ({ ...doctor })),
    loading: false
  }),
  
  [DOCTORS_FAILURE]: (state) => ({
    ...state,
    errors: true,
    loading: false
  }),
  
  [FILTER]: (state, action) => ({
    ...state,
    filter: action.payload,
    loading: false
  }),
  
  [SELECTED_DOCTOR]: (state, action) => {
    const selectedDoctor = state.doctors.find(doc => doc.id === action.payload);
    return {
      ...state,
      selected: selectedDoctor ? { ...selectedDoctor } : null
    };
  },
  
  [INCREMENT]: (state) => ({
    ...state,
    index: state.index + 1
  }),
  
  [DECREMENT]: (state) => ({
    ...state,
    index: state.index - 1
  }),
  
  [SET_INDEX]: (state, action) => ({
    ...state,
    index: action.payload
  }),
  
  [ZERO_INDEX]: (state) => ({
    ...state,
    index: 0
  })
};

const doctorReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default doctorReducer;