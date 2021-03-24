import React from 'react';
import PropTypes from 'prop-types';
import Nav from './comp/Nav';
import Footer from './comp/Footer';

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
