import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/BookAppointmen';
import Errorpage from './pages/Errorpage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/book" component={Book} />
        {/* <Route path="/:id">
          {' '}
          <CryptoInfo />
        </Route> */}

        <Route path="*" component={Errorpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
