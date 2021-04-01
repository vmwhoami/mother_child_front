import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectedDoc, filterByType } from '../../redux/doctors/doctorActions';
import FilterDoctors from '../component/FilterDoctors';
import Doctor from '../component/Doctor';
import Loading from '../component/Loading';
import Layout from '../Layout';

const Doctors = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const state = useSelector((state) => state.doctorReducer);
  const { loading, filter } = state;
  const { loggedIn } = user;
  const selectDoc = (id) => {
    dispatch(selectedDoc(id));
  };

  const types = state.doctors.map((doc) => doc.title);
  const handleFilterChange = (str) => {
    dispatch(filterByType(str));
  };
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <h1>Our Doctors</h1>
        <FilterDoctors
          types={types}
          handleFilterChange={handleFilterChange}
        />
        <div className="doctors">
          {loading ? <Loading />
            : state.doctors.filter((doc) => {
              if (filter === 'All') {
                return doc;
              }
              return doc.title === filter;
            })
              .map((doctor) => (

                <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} />

              ))}
        </div>
      </main>
    </Layout>
  );
};

export default Doctors;
