import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { styleConstants } from "../../../_constants";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div>
        <h4 className="h4 mb-3 font-weight-bold">Please sign in</h4>
        <label for="inputEmail" className="sr-only">
          Given Name
        </label>
        <input
          id="inputEmail"
          className={`${css(
            styles.formControl,
            styles.inputEmail
          )} form-control`}
          placeholder="Given name"
          required
          autofocus
        />
        <label for="inputEmail" className="sr-only">
          Last Name
        </label>
        <input
          id="inputEmail"
          className={`${css(
            styles.formControl,
            styles.input
          )} form-control`}
          placeholder="Last name"
          required
          autofocus
        />
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className={`${css(
            styles.formControl,
            styles.input
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
            styles.input
          )} form-control`}
          placeholder="Password"
          required
        />
        <label for="inputPassword" className="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className={`${css(
            styles.formControl,
            styles.inputPassword
          )} form-control`}
          placeholder="Confirm Password"
          required
        />
        <button
          className={`${css(
            styles.button
          )} btn mt-4 btn-lg btn-primary btn-block`}
          type="submit"
        >
          Sign up
        </button>

        <Row className="my-3">
          <Col>
            <p className="text-center">
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </Col>
        </Row>

        <p className="mt-4 mb-3 text-muted">
          <small>&copy; stakeways - {new Date().getFullYear()}</small>
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
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
  input: {
    marginBottom: "-1px",
    borderRadius: "0"
  },
  inputPassword: {
    marginBottom: "10px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0"
  }
});
