import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/doctors.module.css';

const Doctor = ({ doctor }) => {
  const { name, title, img } = doctor;
  return (
    <div className={css.doctor}>
      <img src={img} alt="name" />
      <h2>{name}</h2>
      <p>{title}</p>
      <button type="button">Book an appointments</button>
    </div>
  );
};
Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
};
export default Doctor;
