import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import "../../App.scss";
import SideMenu from "./sidebar";
import CNavBar from "../../_utils/NavBar";
import { routes } from "../../_constants";
import AccountSettings from "./account/accountSettings";

class MainApp extends Component {
  state = {
    fullWidth: false
  };

  toggleFullWidth = () => {
    this.setState(prevState => ({
      fullWidth: !prevState.fullWidth
    }));
  };

  render() {
    const { location, match } = this.props;
    const { fullWidth } = this.state;
    return (
        <div className="App">
          <SideMenu match={match} isFullWidth={fullWidth} location={location} />
          <main className={`main-content ${fullWidth ? "active" : ""}`}>
            <CNavBar id="navbar" toggleFullWidth={this.toggleFullWidth} />
            <Container fluid>
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route.key}
                    exact={route.exact}
                    path={`${match.path}${route.path}`}
                    name={route.name}
                    component={route.pageComponent}
                  />
                ))}
                <Route 
                  key="account_settings"
                  path={`${match.path}/reset-password`}
                  name="reset-password"
                  component={AccountSettings}
                />
              </Switch>
            </Container>
          </main>
        </div>
    );
  }
}

export default MainApp;
