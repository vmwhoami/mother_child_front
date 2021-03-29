import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styles from '../../css/doctors.module.css';

const Doctor = ({ doctor, selectDoc }) => {
  const {
    name, title, img, info, id,
  } = doctor;

  return (
    <div className="doctor">
      <div className="docimgContainer">
        <img className="docimg" src={img} alt={name} />
      </div>
      <h4>{name}</h4>
      <span>{title}</span>
      <p>{`${info.split('.')[0]}...`}</p>

      <Link to={`/${id}`} onClick={() => selectDoc(id)}>
        <button type="button">Book an appointments</button>
      </Link>
    </div>

  );
};
Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
  selectDoc: PropTypes.func.isRequired,
};
export default Doctor;
