import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LandingTopMenu from 'components/landing/LandingTopMenu';


class LandingPageContent extends Component {
  render() {
    return (
      <div className="landing-page-content__component">
        <LandingTopMenu />
      </div>
    );
  }
}

export default LandingPageContent;
