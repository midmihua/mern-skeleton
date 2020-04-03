import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import MainAuthContainer from 'components/authentication/MainAuthContainer';
import routes from 'routes';
import CommonLoader from 'components/common/CommonLoader';

import './App.css';


class App extends Component {
  static propTypes = {
    siteLoading: PropTypes.bool,
  }

  static defaultProps = {
    siteLoading: false,
  }

  render() {
    const { siteLoading } = this.props;

    return (
      <MainAuthContainer>
        <CommonLoader active={!!siteLoading} />
        {routes}
      </MainAuthContainer>
    );
  }
}

const mapStateToProps = state => (
  {
    siteLoading: state.commonReducer.siteLoading,
  }
);

export default connect(
  mapStateToProps,
  null,
)(App);
