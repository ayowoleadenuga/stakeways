import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./_utils";
import { Container } from "reactstrap";
import "./App.scss";
import SideMenu from "./component/sidebar";
import { CNavBar } from "./_utils/NavBar";
import { routes } from "./_constants"

class App extends Component {
  state = {
    fullWidth: false
  };

  toggleFullWidth = () => {
    this.setState(prevState => ({
      fullWidth: !prevState.fullWidth
    }));
  };

  render() {
    const { location } = this.props
    const { fullWidth } = this.state;
    return (
      <Router history={history}>
        <div className="App">
        <SideMenu isFullWidth={fullWidth} location={location} />
        <main className={`main-content ${fullWidth ? "active" : ""}`}>
          <CNavBar id="navbar" toggleFullWidth={this.toggleFullWidth} />
          <Container fluid>
            <Switch>
              {routes.map(route => (
                <Route
                  key={route.key}
                  exact={route.exact}
                  path={route.path}
                  name={route.name}
                  component={route.pageComponent}
                />
              ))}
            </Switch>
          </Container>
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
