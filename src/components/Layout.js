import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './comp/Nav';
import { autoLogin } from '../redux/login/loginActions';
import css from '../css/layout.module.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);

  useEffect(() => {
    dispatch(autoLogin());
  }, [state.loggedIn]);

  return (
    <div className={css.container}>
      <Nav />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
