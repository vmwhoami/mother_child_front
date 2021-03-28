import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import css from '../../css/nav.module.css';
import { logout } from '../../redux/login/loginActions';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';

const Nav = () => {
  const state = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const { loggedIn } = state;
  const getAppointments = () => {
    const appointment = { user: state.user.id };
    dispatch(getAllMyAppoint(appointment));
  };
  return (
    <div className="navigation">
      <div className={css.logo} />
      <nav>
        <Link to="/">Home</Link>
        {loggedIn ? <Link to="/myAppointment" onClick={getAppointments}>My appointments</Link>
          : <Link to="/register">Register</Link>}
        {!loggedIn ? <Link to="/login">Login</Link>
          : (
            <Link
              to="/"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          )}

      </nav>
      <Footer />
    </div>
  );
};

export default Nav;
