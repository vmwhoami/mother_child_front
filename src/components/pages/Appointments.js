import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../comp/Loading';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';
import Layout from '../Layout';
import Appoint from '../container/Appoint';

const Appointments = () => {
  const state = useSelector((state) => state.appointReducer);
  const reducer = useSelector((state) => state.loginReducer);
  const { myAppoint } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    const user = { user: reducer.user.id };
    dispatch(getAllMyAppoint(user));
  }, []);

  if (myAppoint.length === 0) {
    return <Loading />;
  }
  return (
    <Layout>
      {myAppoint.map((appoint) => (
        <Appoint
          key={appoint.id}
          appoint={appoint}
        />
      ))}
    </Layout>
  );
};

export default Appointments;
