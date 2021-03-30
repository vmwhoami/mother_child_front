import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginActionTypes';

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

const logoutUSer = () => ({
  type: LOGOUT,
});

const login = (credentials) => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/login';
  axios({
    method: 'POST',
    url,
    data: credentials,
    config,
  }).then((response) => {
    const { failure } = response.data;
    if (failure) {
      return dispatch(loginFailure(response.data));
    }
    localStorage.setItem('token', response.data.jwt);
    return dispatch(loginSuccess(response.data));
  })
    .catch((err) => err);
};

const autoLogin = () => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/auto_login';
  const token = await localStorage.getItem('token');
  console.log(token);
  if (token) {
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      dispatch(loginSuccess(response.data));
    });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutUSer());
};

export {
  login, loginSuccess, loginFailure, autoLogin, logout,
};
