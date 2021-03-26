import axios from 'axios';
import { GET_APT_SUCCESS, GET_APT_FAIL } from './appointActTypes';

// , MAKE_APT_SUCCESS, MAKE_APT_FAIL
const gotAppointFail = (err) => ({
  type: GET_APT_FAIL,
  payload: err,

});
const gotAppointSuccess = (data) => ({
  type: GET_APT_SUCCESS,
  payload: data,
});

const getAllMyAppoint = (user) => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/myappointmets';
  const token = localStorage.getItem('token');

  axios.post(url, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch(gotAppointSuccess(response.data));
  }).catch((err) => dispatch(gotAppointFail(err)));
};

export { getAllMyAppoint, gotAppointSuccess, gotAppointFail };
