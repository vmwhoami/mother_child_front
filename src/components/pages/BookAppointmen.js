import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../Layout';
import { bookAnAppointment, callClearMessage } from '../../redux/appointments/appointActions';
import css from '../../css/bookAppointmen.module.css';
import SuccessHandler from '../comp/SuccessHandler';

const BookAppointmen = () => {
  const doctor = useSelector((state) => state.doctorReducer.selected);
  const user = useSelector((state) => state.loginReducer);
  const appoint = useSelector((state) => state.appointReducer);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const { message } = appoint;
  const { loggedIn } = user;

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

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <div className="container">
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
              <DatePicker
                showTimeSelect
                selected={startDate}
                timeClassName={handleColor}
                onChange={(date) => setStartDate(date)}

              />
            </span>
            <span>
              <button type="submit" onClick={() => createAppointment()}>Book now</button>
              {message === 'created' ? <SuccessHandler message="Appointent created" /> : null}
            </span>
          </aside>
        </div>

      </div>
    </Layout>
  );
};

export default BookAppointmen;
