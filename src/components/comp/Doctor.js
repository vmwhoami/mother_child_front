import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => {
  const { name, title, img } = doctor;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{title}</h1>
      <img src={img} alt="name" />
    </div>
  );
};
Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
  // title: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
};
export default Doctor;
