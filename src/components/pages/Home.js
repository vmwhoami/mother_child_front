import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../comp/Doctor';
import Loading from '../comp/Loading';
import { selectedDoc } from '../../redux/doctors/doctorActions';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorReducer);
  const { loading } = state;
  const selectDoc = (id) => dispatch(selectedDoc(id));
  return (
    <Layout>
      <h1>Our doctors</h1>
      <div className="doctors">
        {loading ? <Loading /> : state.doctors.filter((doc) => doc)
          .map((doctor) => <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} />)}
      </div>
    </Layout>
  );
};
export default Home;
