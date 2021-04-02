import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor, selectDoc }) => {
  const {
    name, title, img, id, recieving_hours: hours,
  } = doctor;

  return (
    <div className="doctor">
      <div className="docimgContainer">
        <img className="docimg" src={img} alt={name} />
      </div>
      <h4>{name}</h4>
      <span>{title}</span>
      <p>{`Receiving hours: ${hours}`}</p>

      <Link to={`/${id}`} onClick={() => selectDoc(id)}>
        <button className="button" type="button">Book an appointment</button>
      </Link>
    </div>

  );
};
Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
  selectDoc: PropTypes.func.isRequired,
};
export default Doctor;
