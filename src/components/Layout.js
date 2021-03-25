import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './comp/Nav';
import Footer from './comp/Footer';
import { autoLogin, logout } from '../redux/login/loginActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);

  useEffect(() => {
    dispatch(autoLogin());
  }, [state.loggedIn]);

  return (
    <>
      <Nav />
      {children}
      <Footer />
      {state.loggedIn ? <button type="button" onClick={() => dispatch(logout())}>Logout</button>
        : <button type="button" onClick={() => dispatch(logout())}>Login</button>}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
