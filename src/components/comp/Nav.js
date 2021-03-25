import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">Doctors</Link>
    <Link to="/book">Bookappointment</Link>
    <Link to="/appointments">My appointments</Link>
  </nav>
);

export default Nav;
