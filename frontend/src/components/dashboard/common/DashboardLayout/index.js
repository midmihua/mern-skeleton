import React, { Component } from 'react';

import DashboardTopMenu from '../DashboardTopMenu';
import DashboardContentArea from '../DashboardContentArea';
import DashboardFooter from '../DashboardFooter';

import './DashboardLayout.css';

class DashboardLayout extends Component {
  render() {
    return (
      <div className="dashboard-layout__component">
        <DashboardTopMenu />
        <DashboardContentArea>
          {this.props.children}
        </DashboardContentArea>
        <DashboardFooter />
      </div>
    );
  }
}

export default DashboardLayout;
