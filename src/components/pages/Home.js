import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../component/Doctor';
import Loading from '../component/Loading';
import { selectedDoc } from '../../redux/doctors/doctorActions';

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
        <h1>Doctors</h1>
        <div className="doctors">
          {loading ? <Loading /> : state.doctors.slice(0, 4)
            .map((doctor) => <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} />)}
        </div>
      </div>

    </Layout>
  );
};
export default Home;
