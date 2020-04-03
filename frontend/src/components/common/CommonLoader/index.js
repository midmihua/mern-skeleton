import React from 'react';
import PropTypes from 'prop-types';

import { Dimmer, Loader } from 'semantic-ui-react';

const CommonLoader = ({ active }) => (
  <Dimmer
    active={!!active}
    inverted
    page
  >
    <Loader size='huge'>Loading</Loader>
  </Dimmer>
);

CommonLoader.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CommonLoader;
