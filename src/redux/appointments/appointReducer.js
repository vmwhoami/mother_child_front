import {
  GET_APT_SUCCESS, GET_APT_FAIL, MAKE_APT_SUCCESS, MAKE_APT_FAIL,
  DELET_APT, DEL_FROM_REDUX,
} from './appointActTypes';

const init = {
  myAppoint: [],
  error: false,
  message: null,
  loading: true,
};

const appointReducer = (state = init, action) => {
  switch (action.type) {
    case GET_APT_SUCCESS:
      return {
        ...state, myAppoint: action.payload, error: false, loading: false,
      };
    case GET_APT_FAIL:
      return { ...state, error: true };
    case MAKE_APT_SUCCESS:
      return { ...state, message: action.payload, error: false };
    case MAKE_APT_FAIL:
      return { ...state, message: action.payload, error: false };
    case DELET_APT:
      return {
        ...state, myAppoint: [...state.myAppoint], message: action.payload, error: true,
      };
    case DEL_FROM_REDUX:
      return {
        ...state, myAppoint: state.myAppoint
          .filter((appoint) => appoint.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default appointReducer;
