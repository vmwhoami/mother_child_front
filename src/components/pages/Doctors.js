import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedDoc } from '../../redux/doctors/doctorActions';
import Doctor from '../comp/Doctor';
import Loading from '../comp/Loading';
import Layout from '../Layout';

const Doctors = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorReducer);
  const { loading } = state;
  const selectDoc = (id) => {
    dispatch(selectedDoc(id));
  };
  return (
    <Layout>
      <div className="container">
        <h1>Our Doctors</h1>
        <div className="doctors">
          {loading ? <Loading />
            : state.doctors.filter((doc) => doc)
              .map((doctor) => <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} />)}
        </div>
      </div>
    </Layout>
  );
};

export default Doctors;
