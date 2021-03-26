import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Appoint = ({ appoint, doctors, deletAppt }) => {
  const { id, doctor_id: doctorId, date_time: date } = appoint;
  const { name, title } = doctors.find((doctor) => doctor.id === doctorId);

  return (
    <div>
      <span>{name}</span>
      <span>{title}</span>
      <span>{date}</span>
      <button type="button" onClick={() => deletAppt({ id })}>Cancel</button>
    </div>
  );
};

Appoint.propTypes = {
  appoint: PropTypes.instanceOf(Object).isRequired,
  doctors: PropTypes.instanceOf(Array).isRequired,
  deletAppt: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  doctors: state.doctorReducer.doctors,
  appoints: state.appointReducer.myAppoint,
});

export default connect(mapStateToProps, null)(Appoint);
