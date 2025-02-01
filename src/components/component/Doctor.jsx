import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Doctor = ({
  doctor, selectDoc, docIndex, docLength, index,
}) => {
  const {
    name, title, img, id, recieving_hours: hours,
  } = doctor;

  let position = 'doctor nextslide';
  if (docIndex === index) {
    position = 'doctor activeslide';
  }
  if (docIndex === index - 1 || (index === 0 && docIndex === docLength - 1)) {
    position = 'doctor lastslide';
  }

  return (
    <div className={position}>
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
Doctor.defaultProps = {
  docIndex: 0,
  docLength: 0,
  index: 0,
};

Doctor.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
  selectDoc: PropTypes.func.isRequired,
  docIndex: PropTypes.number,
  docLength: PropTypes.number,
  index: PropTypes.number,
};
export default Doctor;
