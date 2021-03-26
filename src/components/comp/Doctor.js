import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/doctors.module.css';

const Doctor = ({ doctor }) => {
  const { name, title, img } = doctor;
  return (
    <div className={css.doctor}>
      <h2>{name}</h2>
      <p>{title}</p>
      <img src={img} alt="name" />
    </div>
  );
};
Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
};
export default Doctor;
