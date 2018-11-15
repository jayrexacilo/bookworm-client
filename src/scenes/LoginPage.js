import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import LoginForm from '../forms/LoginForm';
import { login } from '../actions/auth';


class LoginPage extends Component {
    submit = (data) => {
      const { login: login2, history } = this.props;
      login2(data).then(() => history.push('/dashboard'));
    }

    render() {
      return (

        <Row>
          <Col md="6">
            <Link to="/">Home</Link>
            <LoginForm submit={this.submit} />
          </Col>
        </Row>
      );
    }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
