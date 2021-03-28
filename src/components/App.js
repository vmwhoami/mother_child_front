import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointmen from './pages/BookAppointmen';
import Errorpage from './pages/Errorpage';
import Appointments from './pages/Appointments';
import Registration from './pages/registration';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/book" component={BookAppointmen} />
        <Route path="/myAppointment" component={Appointments} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/:id">
          {' '}
          <BookAppointmen />
        </Route>

        <Route path="*" component={Errorpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
