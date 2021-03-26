import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../comp/Doctor';

const Home = () => {
  const state = useSelector((state) => state.doctorReducer);
  return (
    <Layout>
      <h1>Our doctors</h1>
      <div className="doctors">
        {state.doctors.filter((doc) => doc)
          .map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
      </div>
    </Layout>
  );
};
export default Home;
