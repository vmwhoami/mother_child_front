import axios from 'axios';
import {
  REGISTRATION_SUCCESS, REGISTER_FAILURE, CLEAR_ERRORS, NAVSWITCH, REDIRECT, CLEAR_REDIRECT,
} from './registrationActTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const registerSuccess = (data) => ({
  type: REGISTRATION_SUCCESS,
  payload: data,
});
const registerFailure = (data) => ({
  type: REGISTER_FAILURE,
  payload: data,
});

const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

const ToggleNav = () => ({
  type: NAVSWITCH,
});

const redirectCall = () => ({
  type: REDIRECT,
});
const clearRedirect = () => ({
  type: CLEAR_REDIRECT,
});

const redirect = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(redirectCall());
  }, 2000);
};

const register = (user) => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/users';

  axios({
    method: 'POST',
    url,
    data: user,
    config,
  }).then((response) => dispatch(registerSuccess(response.data)))
    .catch((err) => {
      if (err.response.status === 406) {
        dispatch(registerFailure(err.response.data.errors));
      }
    });
};

export {
  register,
  registerSuccess,
  registerFailure,
  clearErrors,
  ToggleNav,
  redirect,
  clearRedirect,
};
