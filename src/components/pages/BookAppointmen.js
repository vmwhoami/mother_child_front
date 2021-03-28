import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../Layout';
import css from '../../css/bookAppointmen.module.css';
// useDispatch
const BookAppointmen = () => {
  const doctor = useSelector((state) => state.doctorReducer.selected);
  const user = useSelector((state) => state.loginReducer);
  // const dispatch = useDispatch();

  const { loggedIn } = user;

  const {
    id, name, title, info, room, recieving_hours: hours, img,
  } = doctor;

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <article className={css.article}>
        <h1>
          Book an appointment with
          {' '}
          {' '}
          {name.split(' ')[0]}
        </h1>
        <div className={css.container}>
          <div className={css.imgcont}>
            <img src={img} alt={name} />
          </div>
          <aside className={css.aside}>
            <h1>{id}</h1>
            <h3>
              Full name:
              {' '}
              {name}
            </h3>
            <span>{title}</span>
            <p>{info}</p>
            <p>
              Room Number
              {room}
            </p>
            <p>
              Receiving hours
              {hours}
            </p>
            <form>
              <input type="text" />
              <button type="submit">Book now</button>
            </form>
          </aside>
        </div>
      </article>
    </Layout>
  );
};

export default BookAppointmen;
