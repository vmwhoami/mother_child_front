import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../Layout';
import { bookAnAppointment } from '../../redux/appointments/appointActions';
import css from '../../css/bookAppointmen.module.css';

const BookAppointmen = () => {
  const doctor = useSelector((state) => state.doctorReducer.selected);
  const user = useSelector((state) => state.loginReducer);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const { loggedIn } = user;

  const {
    id, name, title, info, room, recieving_hours: hours, img,
  } = doctor;
  const createAppointment = () => {
    const appointment = { user: user.user.id, doctor: id, time: startDate };
    dispatch(bookAnAppointment(appointment));
  };

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

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <button type="submit" onClick={() => createAppointment()}>Book now</button>

          </aside>
        </div>
      </article>
    </Layout>
  );
};

export default BookAppointmen;
