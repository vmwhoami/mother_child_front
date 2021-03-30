import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../component/Loading';
import Layout from '../Layout';

import Appoint from '../component/Appoint';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';

const Appointments = () => {
  const state = useSelector((state) => state.appointReducer);
  const user = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  if (!user.loggedIn) {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    if (user.loggedIn) {
      dispatch(getAllMyAppoint({ user: user.user.id }));
    }
  }, []);

  const { myAppoint } = state;
  if (myAppoint.length < 1) {
    return (
      <div className="container">
        <Layout>
          <Loading />
        </Layout>
      </div>
    );
  }
  return (
    <Layout>
      <div className="container">
        <h2>My appointments</h2>
        {myAppoint.map((appoint) => (
          <Appoint
            key={appoint.id}
            appoint={appoint}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Appointments;
