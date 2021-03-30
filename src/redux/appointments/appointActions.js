import axios from 'axios';
import {
  GET_APT_SUCCESS, GET_APT_FAIL, DEL_FROM_REDUX, DELL_SUCCESS, NEW_APPOINTMENT, CLEAR_MESSAGE,
} from './appointActTypes';

const url = 'https://mother-child-api.herokuapp.com/api/v1/';

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

const newAppointment = () => ({
  type: NEW_APPOINTMENT,
  payload: 'created',
});

const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

const callClearMessage = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(clearMessage());
  }, 2000);
};

const getAllMyAppoint = (data) => async (dispatch) => {
  const token = await localStorage.getItem('token');
  const auth = await { Authorization: `Bearer ${token}` };

  axios.post(`${url}myappointmets`, data, {
    headers: auth,
  }).then((response) => {
    dispatch(gotAppointSuccess(response.data));
  });
};

const bookAnAppointment = (data) => async (dispatch) => {
  const token = await localStorage.getItem('token');
  const auth = { Authorization: `Bearer ${token}` };
  axios.post(`${url}appointmets`, data, { headers: auth })
    .then((response) => dispatch(newAppointment(response.data)));
};
const deletAppoint = (data) => async (dispatch) => {
  const token = await localStorage.getItem('token');
  const auth = { Authorization: `Bearer ${token}` };
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
  callClearMessage,
};
