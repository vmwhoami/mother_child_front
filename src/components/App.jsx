import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointmen from './pages/BookAppointmen';
import Errorpage from './pages/Errorpage';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import Registration from './pages/registration';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/myAppointment" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        {/* Correct nested route structure */}
        <Route path="/:id/book-appointment" element={<BookAppointmen />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;