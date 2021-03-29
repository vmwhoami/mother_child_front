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
    <div>

      <h2>{`Doctors name: ${name}`}</h2>
      <p>{title}</p>
      <span>{dateTime}</span>
      <span>
        Receiving hours
        {receiving}
      </span>
      <span>
        Room
        {room}
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
