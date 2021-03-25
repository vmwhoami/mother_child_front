import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/login/loginActions';
import SuccessHandler from '../comp/SuccessHandler';
import ErrorHandler from '../comp/ErrorHandler';

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginReducer);
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
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          Email
          <input name="email" type="text" value={email} onChange={(e) => handleChange(e)} placeholder="Email" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" type="password" value={password} onChange={(e) => handleChange(e)} placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
      {state.errors ? <ErrorHandler errors={[state.failure.failure]} /> : null}

      {state.user ? <SuccessHandler message="Login" /> : null}
    </div>

  );
};
export default Login;
