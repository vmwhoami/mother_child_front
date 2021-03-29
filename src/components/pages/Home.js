import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../Layout';
import Doctor from '../comp/Doctor';
import Loading from '../comp/Loading';
import { selectedDoc } from '../../redux/doctors/doctorActions';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorReducer);
  const { loading } = state;
  const selectDoc = (id) => {
    dispatch(selectedDoc(id));
  };

  return (
    <Layout>
      <div className="container">
        <h1>Our doctors</h1>
        <div className="doctors">
          {loading ? <Loading /> : state.doctors.filter((doc) => doc)
            .map((doctor) => <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} />)}
        </div>
      </div>

    </Layout>
  );
};
export default Home;
