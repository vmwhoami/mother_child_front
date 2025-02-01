 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import BookAppointmen from './pages/BookAppointmen.jsx/index.jsx';
import Errorpage from './pages/Errorpage';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments.jsx';
import Registration from './pages/registration';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/doctors" component={Doctors} />
        <Route path="/myAppointment" component={Appointments} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/:id">
          {' '}
          {/* <BookAppointmen /> */}
        </Route>
        <Route path="*" component={Errorpage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
