import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './component/Nav';
import { autoLogin } from '../redux/login/loginActions';
import { getDoctors } from '../redux/doctors/doctorActions';
import { ToggleNav } from '../redux/registration/registationActions';
// import css from '../css/layout.module.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer);
  useEffect(() => {
    dispatch(autoLogin());
  }, [user.loggedIn]);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <>
      <Nav />
      <button className="burgercont" type="button" onClick={() => dispatch(ToggleNav())}>T</button>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
