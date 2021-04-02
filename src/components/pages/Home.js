import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../component/Doctor';
import Loading from '../component/Loading';
import {
  selectedDoc,
  increment,
  decrement,
  setIndex,
  zeroIndex,
} from '../../redux/doctors/doctorActions';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const { loading } = state;
  const selectDoc = (id) => {
    dispatch(selectedDoc(id));
  };
  const docLength = state.doctors.slice(0, 4).length;
  useEffect(() => {
    const lastIndex = docLength - 1;
    if (state.index < 0) {
      dispatch(setIndex(lastIndex));
    }
    if (state.index > lastIndex) {
      dispatch(zeroIndex());
    }
  }, [state.index]);

  useEffect(() => {
    const slider = setInterval(() => {
      dispatch(increment());
    }, 3000);
    return () => clearInterval(slider);
  }, [state.index]);

  const shuffled = state.doctors.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <h1>Doctors</h1>

        {loading ? <Loading /> : (

          <div className="home">
            <button className="increment" type="button" onClick={() => dispatch(increment())}>&#8250;</button>
            {' '}
            {selected
              .map((doctor, docIndex) => (
                <Doctor
                  key={doctor.id}
                  doctor={doctor}
                  selectDoc={selectDoc}
                  docIndex={docIndex}
                  docLength={docLength}
                  index={state.index}
                />
              ))}
            <button className="decrement" type="button" onClick={() => dispatch(decrement())}>&#8249;</button>
          </div>

        )}

      </main>

    </Layout>
  );
};
export default Home;
