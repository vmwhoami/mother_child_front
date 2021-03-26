import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, clearErrors } from '../../redux/registration/registationActions';
import ErrorHandler from '../comp/ErrorHandler';
import SuccessHandler from '../comp/SuccessHandler';
import Layout from '../Layout';

const Registration = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.registrationReducer);
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('gender');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const clearErr = () => dispatch(clearErrors());
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullname':
        return setFullName(value);
      case 'email':
        return setEmail(value);
      case 'gender':
        return setGender(value);
      case 'age':
        return setAge(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
    return null;
  };

  useEffect(() => {
    if (state.user) {
      clearErr();
    }
  }, [state.user]);
  const resetValues = () => {
    setFullName('');
    setEmail('');
    setGender('');
    setAge('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      fullname, email, gender, age, password,
    };
    dispatch(register(user));
    resetValues();
  };
  const genders = ['masculine', 'feminine'];

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="fullname">
            Full Name
            <input name="fullname" type="text" value={fullname} onChange={(e) => handleChange(e)} placeholder="Full Name" />
          </label>

          <label htmlFor="email">
            Email
            <input name="email" type="text" value={email} onChange={(e) => handleChange(e)} placeholder="Email" />
          </label>

          <label htmlFor="gender">
            Gender
            <select name="gender" className={gender} onClick={(e) => handleChange(e)}>
              {genders.map((gen) => (
                <option key={gen} value={gen}>{gen}</option>
              ))}
            </select>
          </label>

          <label htmlFor="age">
            Age
            <input name="age" type="number" value={age} onChange={(e) => handleChange(e)} placeholder="Age in years" />
          </label>

          <label htmlFor="password">
            Password
            <input name="password" type="password" value={password} onChange={(e) => handleChange(e)} placeholder="Password" />
          </label>
          <button type="submit">Register</button>
        </form>
        {state.errors.length > 0 ? <ErrorHandler errors={state.errors} /> : null}

        {state.user ? <SuccessHandler message="Registration" /> : null}
      </div>
    </Layout>
  );
};

export default Registration;
