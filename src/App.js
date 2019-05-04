import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./_utils";
import "./App.scss";
import Account from "./component/AuthComponents";
import MainApp from "./component/App";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route key="auth" path="/auth" name="auth" component={Account} />
          <Route key="app" path="/app" name="app" component={MainApp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
