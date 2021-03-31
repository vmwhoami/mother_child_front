import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import css from '../../css/nav.module.css';
import { logout } from '../../redux/login/loginActions';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';
import { Logo } from './Svgs';

const Nav = () => {
  const state = useSelector((state) => state.loginReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const dispatch = useDispatch();
  const { loggedIn } = state;
  const getAppointments = () => {
    const appointment = { user: state.user.id };
    dispatch(getAllMyAppoint(appointment));
  };
  return (
    <div
      className={navbar ? 'navigation' : 'navigation active'}
    >
      <div>
        <Logo style={css.logo} />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        {loggedIn ? <Link to="/myAppointment" onClick={getAppointments}>Appointments</Link>
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
