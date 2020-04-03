import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import DashboardLayout from 'components/dashboard/common/DashboardLayout';

import ProfileHomePage from 'pages/dashboard/ProfileHomePage';
import ProfileSettingsPage from 'pages/dashboard/ProfileSettingsPage';

class DashboardPage extends Component {
  render() {
    return (
      <DashboardLayout>
        <Switch>
          <Route path="/dashboard/:profileSlug" exact component={ProfileHomePage} />
          <Route path="/dashboard/:profileSlug/settings" component={ProfileSettingsPage} />
        </Switch>
      </DashboardLayout>
    );
  }
}

export default DashboardPage;
