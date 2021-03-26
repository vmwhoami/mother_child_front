import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';
import Layout from '../Layout';

const Appointments = ({ user, getAllMyAppoint }) => {
  useEffect(() => {
    const u = { user: user.id };
    getAllMyAppoint(u);
  }, []);
  return (
    <Layout>
      <div>
        <h2>Appointments</h2>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,

});

const mapDispatchToProps = (dispatch) => ({

  getAllMyAppoint: (user) => {
    dispatch(getAllMyAppoint(user));
  },
});

Appointments.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  getAllMyAppoint: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
