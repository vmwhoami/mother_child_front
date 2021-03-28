import axios from 'axios';
import {
  GET_APT_SUCCESS, GET_APT_FAIL, DEL_FROM_REDUX, DELL_SUCCESS, NEW_APPOINTMENT,
} from './appointActTypes';

const token = localStorage.getItem('token');
const url = 'https://mother-child-api.herokuapp.com/api/v1/';
const auth = { Authorization: `Bearer ${token}` };

const gotAppointFail = (err) => ({
  type: GET_APT_FAIL,
  payload: err,

});
const gotAppointSuccess = (data) => ({
  type: GET_APT_SUCCESS,
  payload: data,
});

const delAppoinFromRedux = (id) => ({
  type: DEL_FROM_REDUX,
  payload: id,
});

const deleteSuccess = (data) => ({
  type: DELL_SUCCESS,
  payload: data,
});

const newAppointment = (data) => ({
  type: NEW_APPOINTMENT,
  payload: data,
});

const getAllMyAppoint = (data) => async (dispatch) => {
  axios.post(`${url}myappointmets`, data, {
    headers: auth,
  }).then((response) => {
    dispatch(gotAppointSuccess(response.data));
  }).catch((err) => dispatch(gotAppointFail(err)));
};

const bookAnAppointment = (data) => async (dispatch) => {
  axios.post(`${url}appointmets`, data, { headers: auth })
    .then((response) => dispatch(newAppointment(response.data)));
};
const deletAppoint = (data) => async (dispatch) => {
  axios.delete(`${url}appointmets`, { data, headers: auth })
    .then((response) => {
      dispatch(deleteSuccess(response.data));
    }).catch((err) => dispatch(gotAppointFail(err)));
};
export {
  getAllMyAppoint,
  gotAppointSuccess,
  gotAppointFail,
  deletAppoint,
  delAppoinFromRedux,
  bookAnAppointment,
};
