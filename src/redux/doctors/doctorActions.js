import axios from 'axios';
import {
  DOCTORS_SUCCESS, DOCTORS_FAILURE, SELECTED_DOCTOR, FILTER,
} from './doctorActTypes';

const selectedDoc = (id) => ({
  type: SELECTED_DOCTOR,
  payload: id,
});

const filterByType = (str) => ({
  type: FILTER,
  payload: str,
});
const getDoctorsSuccess = (doctors) => ({
  type: DOCTORS_SUCCESS,
  payload: doctors,
});

const getDoctorsFailure = () => ({
  type: DOCTORS_FAILURE,
});
const getDoctors = () => async (dispatch) => {
  const url = 'https://mother-child-api.herokuapp.com/api/v1/doctors';
  axios.get(url).then(({ data }) => dispatch(getDoctorsSuccess(data)))
    .catch(() => dispatch(getDoctorsFailure()));
};

export {
  getDoctors, getDoctorsSuccess, getDoctorsFailure, selectedDoc, filterByType,
};
