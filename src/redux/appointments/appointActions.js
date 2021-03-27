import axios from 'axios';
import {
  GET_APT_SUCCESS, GET_APT_FAIL, DELET_APT, DEL_FROM_REDUX,
} from './appointActTypes';

// , MAKE_APT_SUCCESS, MAKE_APT_FAIL
const gotAppointFail = (err) => ({
  type: GET_APT_FAIL,
  payload: err,

});
const gotAppointSuccess = (data) => ({
  type: GET_APT_SUCCESS,
  payload: data,
});

const deleteSuccess = (data) => ({
  DELET_APT,
  payload: data,
});

const delAppoinFromRedux = (id) => ({
  type: DEL_FROM_REDUX,
  payload: id,
});
const token = localStorage.getItem('token');
const url = 'https://mother-child-api.herokuapp.com/api/v1/';
const auth = { Authorization: `Bearer ${token}` };
const getAllMyAppoint = (data) => async (dispatch) => {
  axios.post(`${url}myappointmets`, data, {
    headers: auth,
  }).then((response) => {
    dispatch(gotAppointSuccess(response.data));
  }).catch((err) => dispatch(gotAppointFail(err)));
};

const deletAppoint = (data) => async (dispatch) => {
  axios.delete(`${url}appointmets`, { data, headers: auth })
    .then((response) => {
      dispatch(deleteSuccess(response.data));
    }).catch((err) => dispatch(gotAppointFail(err)));
};

export {
  getAllMyAppoint, gotAppointSuccess, gotAppointFail, deletAppoint, delAppoinFromRedux,
};
