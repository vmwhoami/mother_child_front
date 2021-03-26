import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMyAppoint, deletAppoint } from '../../redux/appointments/appointActions';

import Layout from '../Layout';
import Appoint from '../container/Appoint';

const Appointments = ({
  user, appoints, getAllMyAppoint, deletAppoint,
}) => {
  useEffect(() => {
    if (user) {
      const u = { user: user.id };
      getAllMyAppoint(u);
    }
  }, [user]);
  const deletAppt = (id) => deletAppoint(id);
  return (
    <Layout>
      {appoints.map((appoint) => (
        <Appoint
          key={appoint.id}
          appoint={appoint}
          deletAppt={deletAppt}
        />
      ))}
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
  deletAppoint: (id) => {
    dispatch(deletAppoint(id));
  },
});

Appointments.defaultProps = {
  user: {},
};
Appointments.propTypes = {
  user: PropTypes.instanceOf(Object),
  getAllMyAppoint: PropTypes.func.isRequired,
  appoints: PropTypes.instanceOf(Array).isRequired,
  deletAppoint: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
