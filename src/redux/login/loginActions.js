import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './loginActionTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const login = (credentials) => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/login';
  try {
    const response = await axios({
      method: 'POST',
      url,
      data: credentials,
      config,
    });
    localStorage.setItem('token', response.data.toke);
    return dispatch(loginSuccess(response.data));
  } catch (e) {
    return dispatch(loginFailure(e));
  }
};

export { login, loginSuccess, loginFailure };
