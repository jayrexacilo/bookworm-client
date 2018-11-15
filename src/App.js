import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import HomePage from './scenes/HomePage';
import LoginPage from './scenes/LoginPage';
import SignupPage from './scenes/SignupPage';
import DashboardPage from './scenes/DashboardPage';


const App = () => (
  <Container>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" exact component={SignupPage} />
    <Route path="/dashboard" exact component={DashboardPage} />
  </Container>
);

export default App;
