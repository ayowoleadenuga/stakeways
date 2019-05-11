import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { history } from "./_utils";
import "./App.scss";
import Account from "./component/AuthComponents";
import MainApp from "./component/App";
import { PrivateRoute, PublicOnlyRoute } from "../src/component/_Routes";

import { authActions } from "../src/component/AuthComponents/Login/actions/auth.actions";
import { alertActions } from "../src/component/Alert/actions/alert.actions";

class App extends Component {
  render() {
    const { submitted: loggedIn, logout } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute
            loggedIn={loggedIn}
            path="/app"
            logOut={logout}
            component={MainApp}
          />
          <PublicOnlyRoute
            loggedIn={loggedIn}
            path="/auth"
            component={Account}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { submitting, submitted, request, response, error } = state.auth;
  const { type, message } = state.alert;

  return {
    submitting,
    submitted,
    request,
    response,
    error,
    type,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(authActions.login, dispatch),
    logout: bindActionCreators(authActions.logout, dispatch),
    clearAlerts: bindActionCreators(alertActions.clear, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
