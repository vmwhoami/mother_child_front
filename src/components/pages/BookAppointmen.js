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
            <h3>{`Full name: ${name}`}</h3>
            <div>
              <h4>{title}</h4>
            </div>
            <div>
              <p>{info}</p>
            </div>
            <div>
              <span>
                {' '}
                {`Room Number:${room}`}
              </span>
            </div>
            <p>{`Receiving hours: ${hours}`}</p>
            <div className={css.pickdate}>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              <button type="submit" onClick={() => createAppointment()}>Book now</button>
              {message === 'created' ? <SuccessHandler message="Appointent created" /> : null}
            </div>

          </aside>
        </div>

      </div>
    </Layout>
  );
};

export default BookAppointmen;
