import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLandingPage from 'pages/landing/MainLandingPage';

import LoginPage from 'pages/authentication/LoginPage';
import SignupPage from 'pages/authentication/SignupPage';

import DashboardPage from 'pages/dashboard/DashboardPage';

export default (
  <BrowserRouter>
    <Switch>
      {/* Landing */}
      <Route path="/" exact component={MainLandingPage} />

      {/* Authentication */}
      <Route path="/login" name="login" component={LoginPage} />
      <Route path="/signup" name="signup" component={SignupPage} />

      {/* Dashboard */}
      <Route path="/dashboard" name="dashboard" component={DashboardPage} />

    </Switch>
  </BrowserRouter>
);
