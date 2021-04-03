import React from 'react';
// , { useEffect }
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, redirect } from '../../redux/registration/registationActions';
// clearErrors,
import ErrorHandler from '../component/ErrorHandler';
import SuccessHandler from '../component/SuccessHandler';
import Layout from '../Layout';
import useForm from '../component/useForm';
import css from '../../css/logreg.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const { handleChange, values } = useForm();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.registrationReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);

  // useEffect(() => {
  //   if (state.user) {
  //     clearErr();
  //   }
  // }, [state.user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullname, email, gender, age, password,
    } = values;
    console.log(fullname);
    const user = {
      fullname, email, gender, age, password,
    };
    dispatch(register(user));
  };
  const genders = ['masculine', 'feminine'];

  if (state.user) {
    dispatch(redirect());

    if (state.redirect) {
      return <Redirect to="/login" />;
    }
  }

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <div className={css.formcont}>
          <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={css.formfield}>
              <input name="fullname" type="text" value={values.fullname} onChange={handleChange} placeholder="Full Name" />
            </div>
            <div className={css.formfield}>
              <input name="email" type="text" value={values.email} onChange={handleChange} placeholder="Email" />
            </div>

            <div className={css.formfield}>

              <label htmlFor="gender">
                Gender
                <select id="gender" name="gender" className={css.gender} onClick={handleChange}>
                  {genders.map((gen) => (
                    <option key={gen} value={values.gen}>{gen}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className={css.formfield}>
              <label htmlFor="age">
                Age in years
                <input id="age" name="age" type="number" value={values.age} onChange={handleChange} />
              </label>

            </div>
            <div className={css.formfield}>
              <input name="password" type="password" value={values.password} onChange={handleChange} placeholder="Password" />
            </div>

            <div className={css.formfield}>
              <button type="submit">Register</button>
            </div>
          </form>
          {state.errors.length > 0 ? <ErrorHandler errors={state.errors} /> : null}

          {state.user ? <SuccessHandler message="Registration" /> : null}
        </div>
      </main>

    </Layout>
  );
};

export default Registration;
