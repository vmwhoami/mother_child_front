import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../component/Loading';
import Layout from '../Layout';

import Appoint from '../component/Appoint';
import { getAllMyAppoint } from '../../redux/appointments/appointActions';

const Appointments = () => {
  const state = useSelector((state) => state.appointReducer);
  const user = useSelector((state) => state.loginReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.loggedIn) {
      dispatch(getAllMyAppoint({ user: user.user.id }));
    }
  }, [dispatch, user.loggedIn, user.user.id]);

  if (!user.loggedIn) {
    return <Navigate to="/login" />;
  }
 

  const { myAppoint } = state;
  if (myAppoint.length < 1) {
    return (
      <div className="container">
        <Layout>
          <Loading />
        </Layout>
      </div>
    );
  }
  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <h2>My appointments</h2>
        {myAppoint.map((appoint) => (
          <Appoint
            key={appoint.id}
            appoint={appoint}
          />
        ))}
      </main>
    </Layout>
  );
};
export default Appointments;
