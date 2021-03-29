import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delAppoinFromRedux, deletAppoint } from '../../redux/appointments/appointActions';
import css from '../../css/appoint.module.css';

const Appoint = ({
  appoint, doctors, delAppoinFromRedux, deletAppoint,
}) => {
  const {
    id, doctor_id: doctorId, date_time: date,
  } = appoint;
  const doctor = doctors.find((doctor) => doctor.id === doctorId);
  const {
    name, title, recieving_hours: receiving, room,
  } = doctor;
  const dateTime = (new Date(date)).toString().split(' ').slice(0, 4)
    .join(' ');
  const delitAppointment = (obj) => {
    delAppoinFromRedux(obj);
    deletAppoint(obj);
  };
  return (
    <div className={css.card}>
      <h4>{`Doctors name: ${name}`}</h4>
      <h3>{title}</h3>
      <span>{`TIME: ${dateTime}`}</span>
      <span>
        {' '}
        {`Receiving hours: ${receiving}`}
        {' '}
      </span>
      <span>
        {' '}
        {`Room Nr.: ${room}`}
      </span>
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
