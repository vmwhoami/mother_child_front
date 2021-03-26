import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';
import Layout from '../Layout';
import Appoint from '../container/Appoint';

const Appointments = ({ user, appoints, getAllMyAppoint }) => {
  useEffect(() => {
    const u = { user: user.id };
    getAllMyAppoint(u);
  }, []);
  return (
    <Layout>
      {appoints.map((appoint) => <Appoint key={appoint.id} appoint={appoint} />)}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  appoints: state.appointReducer.myAppoint,
});

const mapDispatchToProps = (dispatch) => ({

  getAllMyAppoint: (user) => {
    dispatch(getAllMyAppoint(user));
  },
});

Appointments.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  getAllMyAppoint: PropTypes.func.isRequired,
  appoints: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
