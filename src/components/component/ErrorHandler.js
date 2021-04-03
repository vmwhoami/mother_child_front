import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import css from '../../css/errorsSuccess.module.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const ErrorHandler = ({ errors }) => {
  const notify = (msg) => toast(msg);
  return (
    <div className={css.erorrs}>
      <ToastContainer />
      {
        errors.map((error) => {
          notify(error);
          return (
            <>
              <span key={`${error}_1`} className={css.error}>{error}</span>
            </>
          );
        })
      }
    </div>
  );
};

ErrorHandler.propTypes = {
  errors: PropTypes.instanceOf(Array).isRequired,
};
export default ErrorHandler;
