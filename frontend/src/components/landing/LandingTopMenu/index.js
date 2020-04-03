import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from 'redux/reducers/users';

import { Link } from 'react-router-dom';


class LandingTopMenu extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    me: PropTypes.object,
  }

  static defaultProps = {
    me: null,
  }

  render() {
    const { me } = this.props;

    return (
      <div className="landing-top-menu__component">
        <div className="logo">
          CRYPTOLYTICS
        </div>
        <div className="nav-wrapper">
          {!me &&
            <Link to="/login">Login</Link>
          }
          {!me &&
            <Link to="/signup">Signup</Link>
          }
          {me &&
            <Link onClick={() => this.props.logout()}>Logout</Link>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    me: state.usersReducer.me,
  }
);

export default connect(
  mapStateToProps,
  {
    logout,
  },
)(LandingTopMenu);
