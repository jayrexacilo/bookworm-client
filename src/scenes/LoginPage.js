import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, Row, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => (
  <Row>
    <Col md="6">
      <Link to="/">Home</Link>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="example@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="enter password" />
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    </Col>
  </Row>
);

export default LoginPage;
