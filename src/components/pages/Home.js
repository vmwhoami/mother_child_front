import React from 'react';
import Layout from '../Layout';
import Registration from './registration';
import Login from './login';

const Home = () => (
  <Layout>
    <h2>Welcome to Home page</h2>
    <Login />
    <Registration />
  </Layout>
);
export default Home;
