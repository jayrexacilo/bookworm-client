import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => (
  <Row>
    <Col md="6">
      <Link to="/">Home</Link>
      <LoginForm />
    </Col>
  </Row>
);

export default LoginPage;
