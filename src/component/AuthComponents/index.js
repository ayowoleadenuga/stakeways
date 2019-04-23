import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import logo from "../../logo.png";
import backgroundImage from "../../lottery.jpg";
import { styleConstants } from "../../_constants";
import { Route, Switch } from "react-router-dom";

/* import LoginComponent from "./Login"; */

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
                  <img className="mb-4" src={logo} alt="" height="72" />
                  <h4 className="h4 mb-3 font-weight-bold">Please sign in</h4>
                  <label for="inputEmail" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className={`${css(
                      styles.formControl,
                      styles.inputEmail
                    )} form-control`}
                    placeholder="Email address"
                    required
                    autofocus
                  />
                  <label for="inputPassword" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className={`${css(
                      styles.formControl,
                      styles.inputPassword
                    )} form-control`}
                    placeholder="Password"
                    required
                  />
                  <button
                    className={`${css(
                      styles.button
                    )} btn mt-4 btn-lg btn-primary btn-block`}
                    type="submit"
                  >
                    Sign in
                  </button>
                  <p className="mt-4 mb-3 text-muted">
                    <small>&copy; stakeways - {new Date().getFullYear()}</small>
                  </p>
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
  },
  formControl: {
    position: "relative",
    boxSizing: "border-box",
    height: "auto",
    padding: "10px",
    fontSize: "14px",
    ":focus": {
      zIndex: "2"
    }
  },
  button: {
    backgroundColor: styleConstants.secondaryColor,
    borderColor: styleConstants.secondaryColor,
    fontSize: "16px"
  },
  inputEmail: {
    marginBottom: "-1px",
    borderBottomRightRadius: "0",
    borderBottomLeftRadius: "0"
  },
  inputPassword: {
    marginBottom: "10px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0"
  }
});

export default Account;
