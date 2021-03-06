import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../Layout';
import { bookAnAppointment, callClearMessage } from '../../redux/appointments/appointActions';
import css from '../../css/bookAppointmen.module.css';
import SuccessHandler from '../component/SuccessHandler';

const BookAppointmen = () => {
  const user = useSelector((state) => state.loginReducer);
  const doctor = useSelector((state) => state.doctorReducer.selected);
  const appoint = useSelector((state) => state.appointReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const { message } = appoint;
  const { loggedIn } = user;
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  const {
    id, name, title, info, room, recieving_hours: hours, img,
  } = doctor;
  const createAppointment = () => {
    const appointment = { user: user.user.id, doctor: id, time: startDate };
    dispatch(bookAnAppointment(appointment));
    dispatch(callClearMessage());
  };

  const handleColor = (time) => {
    const h = hours.split('-');
    const begin = parseInt(h[0], 10);
    const end = parseInt(h[1], 10);
    const condition = time.getHours() >= begin && time.getHours() <= end;
    return (condition ? `${css.success}` : `${css.error}`);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <h1>
          {`Book an appointment with ${name.split(' ')[0]}`}
        </h1>
        <div className={css.container}>
          <div className={css.imgcont}>
            <img src={img} alt={name} />
          </div>
          <aside className={css.aside}>
            <span>
              <h3>{`Full name: ${name}`}</h3>
            </span>
            <h4>{title}</h4>
            <span>
              <p>{info}</p>
            </span>
            <span>
              {' '}
              {`Room Number:${room}`}
            </span>
            <span>
              <p>{`Receiving hours: ${hours}`}</p>
            </span>
            <span>
              Pick date:
              {' '}
              {' '}
              <DatePicker
                showTimeSelect
                selected={startDate}
                filterDate={isWeekday}
                timeClassName={handleColor}
                onChange={(date) => setStartDate(date)}
                className={css.input}
                minDate={new Date()}
                dateFormat="MMMM d, yyyy h:mm aa"
                showDisabledMonthNavigation
              />
            </span>
            <span>
              <button type="submit" className={css.btn} onClick={() => createAppointment()}>Book now</button>
              {message === 'created' ? <SuccessHandler message="Appointent created" /> : null}
            </span>
          </aside>
        </div>

      </main>
    </Layout>
  );
};

export default BookAppointmen;
