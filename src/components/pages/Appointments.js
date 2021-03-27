import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../Layout';
import Appoint from '../container/Appoint';

const Appointments = () => {
  const myAppoint = useSelector((state) => state.appointReducer.myAppoint);

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
