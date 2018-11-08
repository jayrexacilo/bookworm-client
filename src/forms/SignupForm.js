import React, { Component } from 'react';
import {
  Form, FormGroup, Label, Input, FormFeedback, Button
} from 'reactstrap';
import Validator from 'validator';
import { Loader } from 'react-overlay-loader';

class SignupForm extends Component {
    state = {
      data: {
        email: '',
        password: '',
        confirmPassword: ''
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
      const err = this.validate(data);
      this.setState({ loading: true });

      setTimeout(() => {
        this.setState({ loading: false, errors: err });
      }, 500);

      e.preventDefault();
    }

    validate = (data) => {
      const errors = {};

      if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
      if (!data.password) errors.password = 'Can\'t be blank';
      if (!data.confirmPassword) errors.confirmPassword = 'Can\'t be blank';
      if (data.password !== data.confirmPassword) errors.passwordMatch = 'Password did not match';

      return errors;
    }

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
            <Input type="password" name="password" id="password" placeholder="Enter password" value={data.password} onChange={this.onChange} invalid={!!(errors.password || errors.passwordMatch)} />
            { !!errors.password && (
              <FormFeedback invalid>{errors.password}</FormFeedback>
            ) }
            {!!errors.passwordMatch && (
            <FormFeedback invalid>{errors.passwordMatch}</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Confirm password" value={data.confirmPassword} onChange={this.onChange} invalid={!!(errors.confirmPassword || errors.passwordMatch)} />
            { !!errors.confirmPassword && (
              <FormFeedback invalid>{errors.confirmPassword}</FormFeedback>
            ) }
          </FormGroup>
          <Button color="primary">Signup</Button>
        </Form>
      );
    }
}

export default SignupForm;
