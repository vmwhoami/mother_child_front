import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, clearErrors } from '../../redux/registration/registationActions';
import ErrorHandler from '../component/ErrorHandler';
import SuccessHandler from '../component/SuccessHandler';
import Layout from '../Layout';
import css from '../../css/logreg.module.css';

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
      <div className={css.container}>
        <div className={css.formcont}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={css.formfield}>
              <input name="fullname" type="text" value={fullname} onChange={(e) => handleChange(e)} placeholder="Full Name" />
            </div>
            <div className={css.formfield}>
              <input name="email" type="text" value={email} onChange={(e) => handleChange(e)} placeholder="Email" />
            </div>

            <div className={css.formfield}>
              <span>Gender</span>
              <select name="gender" className={gender} onClick={(e) => handleChange(e)}>
                {genders.map((gen) => (
                  <option key={gen} value={gen}>{gen}</option>
                ))}
              </select>
            </div>

            <div className={css.formfield}>
              <span>Age in years</span>
              <input name="age" type="number" value={age} onChange={(e) => handleChange(e)} />

            </div>
            <div className={css.formfield}>
              <input name="password" type="password" value={password} onChange={(e) => handleChange(e)} placeholder="Password" />
            </div>

            <div className={css.formfield}>
              <button type="submit">Register</button>
            </div>
          </form>
          {state.errors.length > 0 ? <ErrorHandler errors={state.errors} /> : null}

          {state.user ? <SuccessHandler message="Registration" /> : null}
        </div>
      </div>

    </Layout>
  );
};

export default Registration;
