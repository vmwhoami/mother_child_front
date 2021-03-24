import axios from 'axios';
import { REGISTRATION_SUCCESS, REGISTER_FAILURE } from './registrationActTypes';

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

const register = (user) => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/users';
  try {
    const response = await axios({
      method: 'POST',
      url,
      data: user,
      config,
    });

    return dispatch(registerSuccess(response.data));
  } catch (e) {
    return dispatch(registerFailure(e));
  }
};

export { register, registerSuccess, registerFailure };
