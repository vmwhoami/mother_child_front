import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import css from '../../css/nav.module.css';

const Nav = () => (
  <div className="navigation">
    <div className={css.logo} />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/book">Bookappointment</Link>
      <Link to="/appointments">My appointments</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
    <Footer />
  </div>
);

export default Nav;
