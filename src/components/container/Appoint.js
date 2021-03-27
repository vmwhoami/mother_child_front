import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delAppoinFromRedux } from '../../redux/appointments/appointActions';

const Appoint = ({ appoint, doctors, delAppoinFromRedux }) => {
  const { id, doctor_id: doctorId, date_time: date } = appoint;
  console.log(doctorId);
  console.log(doctors);

  return (
    <div>
      {/* <span>{name}</span>
      <span>{title}</span> */}
      <span>{date}</span>
      <button type="button" onClick={() => delAppoinFromRedux({ id })}>Cancel</button>
    </div>
  );
};

Appoint.propTypes = {
  appoint: PropTypes.instanceOf(Object).isRequired,
  doctors: PropTypes.instanceOf(Array).isRequired,
  delAppoinFromRedux: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  doctors: state.doctorReducer.doctors,
});

const mapDispatchToProps = (dispatch) => ({

  delAppoinFromRedux: (id) => {
    dispatch(delAppoinFromRedux(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Appoint);
