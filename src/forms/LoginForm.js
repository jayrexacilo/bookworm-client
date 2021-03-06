import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import Validator from 'validator';
import { Loader } from 'react-overlay-loader';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

    onChange = (e) => {
      const { data } = this.state;
      this.setState({
        data: { ...data, [e.target.name]: e.target.value }
      });
    }

  onSubmit = (e) => {
    const { data } = this.state;
    const { submit } = this.props;
    const err = this.validate(data);
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ errors: err, loading: false });

      if (Object.keys(err).length === 0) {
        submit(data);
      }
    }, 500);
    e.preventDefault();
  };

  validate = (data) => {
    const errors = {};

    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };


  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Loader loading={loading} />
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="example@example.com" value={data.email} onChange={this.onChange} invalid={!!errors.email} />
          { !!errors.email && (
          <FormFeedback invalid>{errors.email}</FormFeedback>
          ) }
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="enter password" value={data.password} onChange={this.onChange} invalid={!!errors.password} />
          { !!errors.password && (
          <FormFeedback invalid>{errors.password}</FormFeedback>
          ) }
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
