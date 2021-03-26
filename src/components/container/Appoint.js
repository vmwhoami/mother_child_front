import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Appoint = ({ appoint, doctors }) => {
  const { doctor_id: doctorId, date_time: date } = appoint;
  return (
    <div>
      {doctors.filter((doctor) => doctor.id === doctorId)
        .map((doctor) => {
          const { id, name, title } = doctor;
          return (
            <>
              <h2 key={id}>{name}</h2>
              <span>{title}</span>
              <span>{date}</span>
              <button type="button">Cancel</button>
            </>
          );
        })}

    </div>
  );
};

Appoint.propTypes = {
  appoint: PropTypes.instanceOf(Object).isRequired,
  doctors: PropTypes.instanceOf(Array).isRequired,
};
const mapStateToProps = (state) => ({
  doctors: state.doctorReducer.doctors,
  appoints: state.appointReducer.myAppoint,
});
export default connect(mapStateToProps, null)(Appoint);
