import React from 'react';
import { useSelector } from 'react-redux';
import { Heart } from 'react-awesome-spinners';
import Layout from '../Layout';
import Doctor from '../comp/Doctor';

const Home = () => {
  const state = useSelector((state) => state.doctorReducer);
  const { loading } = state;
  const heart = { color: '#000fff' };
  return (
    <Layout>
      <h1>Our doctors</h1>
      <div className="doctors">
        {loading ? <Heart color={heart.color} /> : state.doctors.filter((doc) => doc)
          .map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)}
      </div>
    </Layout>
  );
};
export default Home;
