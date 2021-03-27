import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletAppoint } from '../../redux/appointments/appointActions';

const Appoint = ({ appoint, doctors, deletAppoint }) => {
  const { id, doctor_id: doctorId, date_time: date } = appoint;
  const { name, title } = doctors.find((doctor) => doctor.id === doctorId);

  return (
    <div>
      <span>{name}</span>
      <span>{title}</span>
      <span>{date}</span>
      <button type="button" onClick={() => deletAppoint({ id })}>Cancel</button>
    </div>
  );
};

Appoint.propTypes = {
  appoint: PropTypes.instanceOf(Object).isRequired,
  doctors: PropTypes.instanceOf(Array).isRequired,
  deletAppoint: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  doctors: state.doctorReducer.doctors,
  appoints: state.appointReducer.myAppoint,
});

const mapDispatchToProps = (dispatch) => ({

  deletAppoint: (id) => {
    dispatch(deletAppoint(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Appoint);
