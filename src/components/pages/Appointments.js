import React from 'react';
import { useSelector } from 'react-redux';
// import Loading from '../comp/Loading';
import Layout from '../Layout';
import Appoint from '../container/Appoint';

const Appointments = () => {
  const state = useSelector((state) => state.appointReducer);
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
