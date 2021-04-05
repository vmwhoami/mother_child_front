import axios from 'axios';
import {
  DOCTORS_SUCCESS, DOCTORS_FAILURE, SELECTED_DOCTOR, FILTER, INCREMENT, DECREMENT, SET_INDEX,
  ZERO_INDEX,
} from './doctorActTypes';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

const setIndex = (num) => ({
  type: SET_INDEX,
  payload: num,
});

const zeroIndex = () => ({
  type: ZERO_INDEX,
});

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
  getDoctors,
  getDoctorsSuccess,
  getDoctorsFailure,
  selectedDoc,
  filterByType,
  increment,
  decrement,
  setIndex,
  zeroIndex,
};
