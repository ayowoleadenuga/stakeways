import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import logo from "../../logo.png"
import { styleConstants } from "../../_constants";

// import { Route, Switch } from "react-router-dom";

/* import LoginComponent from "./Login"; */

class Account extends Component {
  render() {
    return (
      <Row className="App">
        <Col>
          <div className={css(styles.wrapper)}>
            <div className={css(styles.formSignin)}>
              <img
                className="mb-4"
                src={logo}
                alt=""
                height="72"
              />
              <h4 className="h3 mb-3 font-weight-bold">Please sign in</h4>
              <label for="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
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
                className="form-control"
                placeholder="Password"
                required
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: styleConstants.primaryColor
  },

  formSignin: {
    width: "100%",
    maxWidth: "330px",
    padding: "15px",
    margin: "auto"
  },
  formControl: {
    position: "relative",
    boxSizing: "border-box",
    height: "auto",
    padding: "10px",
    fontSize: "16px",
    ":focus": {
      zIndex: "2"
    }
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
