import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/book">Bookappointment</Link>
    <Link to="/appointments">My appointments</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>

  </nav>
);

export default Nav;
