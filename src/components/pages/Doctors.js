import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectedDoc } from '../../redux/doctors/doctorActions';
import Doctor from '../component/Doctor';
import Loading from '../component/Loading';
import Layout from '../Layout';

const Doctors = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer);
  const state = useSelector((state) => state.doctorReducer);
  const { loading } = state;
  const { loggedIn } = user;
  const selectDoc = (id) => {
    dispatch(selectedDoc(id));
  };
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout>
      <div className="container">
        <h1>Our Doctors</h1>
        <div className="doctors">
          {loading ? <Loading />
            : state.doctors.filter((doc) => doc)
              .map((doctor) => (

                <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} />

              ))}
        </div>
      </div>
    </Layout>
  );
};

export default Doctors;
