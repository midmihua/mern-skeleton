import React from 'react';
import PropTypes from 'prop-types';

const DashboardContentArea = ({ children }) => (
  <div className="dashboard-content-area__component">
    <div className="contentt-wrapper">
      {children}
    </div>
  </div>
);

DashboardContentArea.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DashboardContentArea;
