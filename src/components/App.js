import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Book from '../pages/BookAppointmen';
import Nav from './Nav';
import Errorpage from '../pages/Errorpage';
// import css from '../css/App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
