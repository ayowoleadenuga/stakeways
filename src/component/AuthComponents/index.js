import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import backgroundImage from "../../lottery.jpg";
import { styleConstants } from "../../_constants";
import { Route, Switch } from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from "./ResetPassword/ResetPassword";


class Account extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className={`${css(styles.fullHeight)} p-0`}>
        <div className={css(styles.wrapper)}>
          <div className={css(styles.formSignin)}>
            <Row>
              <Col sm="7" className="p-0">
                <div className={css(styles.marketingContent)} />
              </Col>
              <Col sm="5" className="p-0">
                <div className={css(styles.formColumn)}>
                  <Switch>
                    <Route path={`${match.url}/login`} component={Login} />
                    <Route
                      path={`${match.url}/register`}
                      component={Register}
                    />
                    <Route
                      path={`${match.url}/forgot-password`}
                      component={ForgotPassword}
                    />
                    <Route
                      path={`${match.url}/reset-password`}
                      component={ResetPassword}
                    />
                  </Switch>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  fullHeight: {
    height: "100%"
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Rubik, sans-serif",
    height: "100%",
    backgroundColor: styleConstants.primaryColor
  },
  marketingContent: {
    background: `linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${backgroundImage})`,
    backgroundSize: "cover !important",
    height: "100%"
  },
  formColumn: {
    backgroundColor: "#FFF",
    padding: "4rem 2rem"
  },
  formSignin: {
    width: "100%",
    maxWidth: "1024px",
    textAlign: "center",
    boxShadow: "0 0 12px #2e2e2e",
    margin: "auto"
  }
});

export default Account;
