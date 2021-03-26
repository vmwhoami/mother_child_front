import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/doctors.module.css';

const Doctor = ({ doctor }) => {
  const {
    name, title, img, info,
  } = doctor;
  return (
    <div className={css.container}>
      <div className={css.doctor}>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <span>{title}</span>
        <p>{info}</p>
        <button type="button">Book an appointments</button>
      </div>
    </div>
  );
};
Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
};
export default Doctor;
