import {
  GET_APT_SUCCESS, GET_APT_FAIL, MAKE_APT_SUCCESS, MAKE_APT_FAIL,
} from './appointActTypes';

const init = {
  myAppoint: [],
  error: false,
  message: null,
};

const appointReducer = (state = init, action) => {
  switch (action.type) {
    case GET_APT_SUCCESS:
      return { ...state, myAppoint: action.payload, error: false };
    case GET_APT_FAIL:
      return { ...state, error: true };
    case MAKE_APT_SUCCESS:
      return { ...state, message: action.payload, error: false };
    case MAKE_APT_FAIL:
      return { ...state, message: action.payload, error: true };

    default:
      return state;
  }
};

export default appointReducer;
