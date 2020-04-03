import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { retrieveToken, clearLoginError } from 'redux/reducers/users';
import { getCookie } from 'utils/cookies';

import { Redirect, Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { Form, Message, Segment, Header, Divider, Icon } from 'semantic-ui-react';
import TextField from 'components/redux-form-adapters/TextField';
import Button from 'components/elements/buttons/Button';

import validate from './validate';

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    retrieveToken: PropTypes.func.isRequired,
    clearLoginError: PropTypes.func.isRequired,
    accessToken: PropTypes.string,
    loginError: PropTypes.object,
  };

  static defaultProps = {
    accessToken: null,
    loginError: null,
  };

  componentWillUnmount() {
    this.props.clearLoginError();
  }

  handleSubmit = (values) => {
    this.props.retrieveToken(values.email, values.password);
  }

  render() {
    const { accessToken, loginError } = this.props;

    // Move logic to Common Page Layout
    if (accessToken || getCookie('accessToken')) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-form__component">
        <Segment basic>
          <Link to="/">
            <Icon name="home" size="big" />
          </Link>
          <Header as="h2">Login</Header>

          <Form
            onSubmit={this.props.handleSubmit(this.handleSubmit)}
            error={!this.props.valid}
          >
            {/* Email Address */}
            <Field
              label="Email Address:"
              component={TextField}
              name="email"
              type="email"
              placeholder="Enter you email"
              required
            />

            {/* Password */}
            <Field
              label="Password:"
              component={TextField}
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <Button submit>
              LOGIN
            </Button>

          </Form>

          {loginError &&
            <Message
              warning
              header="Login Error"
              content="Login Error"
            />
          }

          <Divider section />
          <Link to="/signup">Signup</Link>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    accessToken: state.usersReducer.accessToken,
    loginError: state.usersReducer.loginError,
  }
);

export default connect(
  mapStateToProps,
  {
    retrieveToken,
    clearLoginError,
  },
)(reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm));
