import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './comp/Nav';
import { autoLogin } from '../redux/login/loginActions';
import { getDoctors } from '../redux/doctors/doctorActions';
import { getAllMyAppoint } from '../redux/appointments/appointActions';
// import css from '../css/layout.module.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);
  useEffect(() => {
    dispatch(autoLogin());
  }, [state.loggedIn]);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  useEffect(() => {
    if (state.loggedIn) {
      const user = { user: state.user.id };
      dispatch(getAllMyAppoint(user));
    }
  }, [state.loggedIn]);

  return (
    <>
      <Nav />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
