import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../comp/Doctor';

const Home = () => {
  const state = useSelector((state) => state.doctorReducer);
  return (
    <Layout>
      {state.doctors.map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
    </Layout>
  );
};
export default Home;
