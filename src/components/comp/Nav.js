import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import css from '../../css/nav.module.css';
import { logout } from '../../redux/login/loginActions';

const Nav = () => {
  const state = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const { loggedIn } = state;
  return (
    <div className="navigation">
      <div className={css.logo} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book">Bookappointment</Link>
        {loggedIn ? <Link to="/appointments">My appointments</Link> : <Link to="/register">Register</Link>}
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
