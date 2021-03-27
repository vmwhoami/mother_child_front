import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../comp/Doctor';
import Loading from '../comp/Loading';

const Home = () => {
  const state = useSelector((state) => state.doctorReducer);
  const { loading } = state;

  return (
    <Layout>
      <h1>Our doctors</h1>
      <div className="doctors">
        {loading ? <Loading /> : state.doctors.filter((doc) => doc)
          .map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
      </div>
    </Layout>
  );
};
export default Home;
