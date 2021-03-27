import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';

import Layout from '../Layout';
import Appoint from '../container/Appoint';

const Appointments = ({
  user, appoints, getAllMyAppoint,
}) => {
  const { myAppoint } = appoints;
  const [apptsArr, setApts] = useState([myAppoint])

  useEffect(() => {
    if (user) {
      const u = { user: user.id };
      getAllMyAppoint(u);
    }
  }, [myAppoint]);
  if (Object.keys(myAppoint).length === 0) {
    return null;
  }

  return (
    <Layout>
      {myAppoint.map((appoint) => (
        <Appoint
          key={appoint.id}
          appoint={appoint}

        />
      ))}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  appoints: state.appointReducer,

});

const mapDispatchToProps = (dispatch) => ({

  getAllMyAppoint: (user) => {
    dispatch(getAllMyAppoint(user));
  },

});

Appointments.defaultProps = {
  user: [],

};
Appointments.propTypes = {
  user: PropTypes.instanceOf(Object),
  getAllMyAppoint: PropTypes.func.isRequired,
  appoints: PropTypes.instanceOf(Object).isRequired,

};
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
