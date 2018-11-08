import React from 'react';
import {
  Row, Col, Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const SignupPage = () => (
  <Row>
    <Col md="6">
      <Form>
        <Link to="/">Home</Link>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="example@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter password" />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Confirm password" />
        </FormGroup>
        <Button color="primary">Signup</Button>
      </Form>
    </Col>
  </Row>
);

export default SignupPage;
