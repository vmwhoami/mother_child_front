import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './component/Nav';
import { autoLogin } from '../redux/login/loginActions';
import { getDoctors } from '../redux/doctors/doctorActions';
import { ToggleNav } from '../redux/registration/registationActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer);
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch, user.loggedIn]);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <button className="burgercont" type="button" onClick={() => dispatch(ToggleNav())}>T</button>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
