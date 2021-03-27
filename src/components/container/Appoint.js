import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delAppoinFromRedux, deletAppoint } from '../../redux/appointments/appointActions';

const Appoint = ({
  appoint, doctors, delAppoinFromRedux, deletAppoint,
}) => {
  const {
    id, doctor_id: doctorId, date_time: date,
  } = appoint;
  const doctor = doctors.find((doctor) => doctor.id === doctorId);
  const { name, title } = doctor;

  const delitAppointment = (obj) => {
    delAppoinFromRedux(obj);
    deletAppoint(obj);
  };
  return (
    <div>
      <span>{name}</span>
      <span>{title}</span>
      <span>{date}</span>
      <button type="button" onClick={() => delitAppointment({ id })}>Cancel</button>
    </div>
  );
};

Appoint.propTypes = {
  appoint: PropTypes.instanceOf(Object).isRequired,
  doctors: PropTypes.instanceOf(Array).isRequired,
  delAppoinFromRedux: PropTypes.func.isRequired,
  deletAppoint: PropTypes.func.isRequired,

};
const mapStateToProps = (state) => ({
  doctors: state.doctorReducer.doctors,
});

const mapDispatchToProps = (dispatch) => ({
  deletAppoint: (id) => {
    dispatch(deletAppoint(id));
  },
  delAppoinFromRedux: (id) => {
    dispatch(delAppoinFromRedux(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Appoint);
