import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/errorsSuccess.module.css';

const SuccessHandler = ({ message }) => (
  <div className={css.success}>
    <span>
      {message}
      {' '}
      Successfull
    </span>
  </div>
);

SuccessHandler.propTypes = {
  message: PropTypes.string.isRequired,
};
export default SuccessHandler;
