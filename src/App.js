import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { history } from "./_utils";
import "./App.scss";
import Account from "./component/AuthComponents";
import MainApp from "./component/App";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          key="account"
          exact={true}
          path="/account"
          name="account"
          component={Account}
        />
        <Route
          key="app"
          exact={true}
          path="/app"
          name="app"
          component={MainApp}
        />
      </Router>
    );
  }
}

export default App;
