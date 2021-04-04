import React from 'react';
import PropTypes from 'prop-types';
import css from '../../css/errorsSuccess.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();
//  <ToastContainer />
// const notify = (msg) => toast(msg);
// notify(error);
const ErrorHandler = ({ errors }) => (
  <div className={css.erorrs}>
    {
      errors.map((error) => (
        <>
          <span key={`${error}_1`} className={css.error}>{error}</span>
        </>
      ))
    }
  </div>
);
ErrorHandler.propTypes = {
  errors: PropTypes.instanceOf(Array).isRequired,
};
export default ErrorHandler;
