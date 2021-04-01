import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../redux/login/loginActions';
import SuccessHandler from '../component/SuccessHandler';
import ErrorHandler from '../component/ErrorHandler';
import Layout from '../Layout';
import css from '../../css/logreg.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const state = useSelector((state) => state.loginReducer);
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
    return null;
  };

  const resetValues = () => {
    setEmail('');
    setPassword('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email, password,
    };
    dispatch(login(user));
    resetValues();
  };
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <div className={css.formcont}>
          <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={css.formfield}>
              <input name="email" type="text" value={email} onChange={(e) => handleChange(e)} placeholder="Email" />
            </div>
            <div className={css.formfield}>
              <input name="password" type="password" value={password} onChange={(e) => handleChange(e)} placeholder="Password" />
            </div>
            <div className={css.formfield}>
              <button type="submit">Login</button>
            </div>
            <h4>OR</h4>
            <div className={css.formfield}>
              <Link to="/register">
                Register
              </Link>
            </div>
          </form>
          {state.errors ? <ErrorHandler errors={[state.failure.failure]} /> : null}

          {state.user ? <SuccessHandler message="Login" /> : null}
        </div>
      </main>
    </Layout>
  );
};
export default Login;
