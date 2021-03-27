import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Loading from '../comp/Loading';
import Layout from '../Layout';
import Appoint from '../container/Appoint';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';

const Appointments = () => {
  const state = useSelector((state) => state.appointReducer);
  const user = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  if (user.loggedIn) {
    dispatch(getAllMyAppoint({ user: user.user.id }));
  }
  const { myAppoint } = state;
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
export default Appointments;
