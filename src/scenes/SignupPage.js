import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';

const SignupPage = () => (
  <Row>
    <Col md="6">
      <Link to="/">Home</Link>
      <SignupForm />
    </Col>
  </Row>
);

export default SignupPage;
