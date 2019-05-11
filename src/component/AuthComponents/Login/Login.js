import React, { Component } from "react";
import { Button, Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { TextInput } from "../../../shared/Forms/TextInput";
import Formsy from "formsy-react";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { styleConstants } from "../../../_constants";
import { Spinner } from "../../../shared";
import { MyCheckbox } from "../../../shared/Forms/Checkbox";

import { authActions } from "./actions/auth.actions";
import { alertActions } from "../../Alert/actions/alert.actions";

class Login extends Component {
  state = {
    canSubmit: false
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  componentDidMount() {
    this.props.clearAlerts();
  }

  componentWillUnmount() {
    this.props.clearAlerts();
  }

  handleSubmit = data => {
    this.props.login(data);
  };

  render() {
    const { canSubmit } = this.state;
    const { submitting, type, message } = this.props;
    return (
      <div>
        <h4 className="h4 mb-3 font-weight-bold">Please sign in</h4>
        <Formsy
          ref="loginForm"
          onValidSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          noValidate
        >
          {message && <Alert color={type}>{message}</Alert>}
          <div className="grouped-form">
            <TextInput
              name="userNameOrEmailAddress"
              title="Email"
              validating={submitting}
              type="email"
              validations={{
                isEmail: true
              }}
              validationErrors={{
                isEmail: "You have to type valid email"
              }}
              required
            />
            <TextInput
              name="password"
              title="Password"
              validating={submitting}
              type="password"
              required
            />
          </div>
          <div className="my-3">
            <MyCheckbox
              name="remeberClient"
              title="Remember me"
              validating={submitting}
              value={false}
            />
          </div>
          <Button
            type="submit"
            className={`${css(
              styles.button
            )} btn mt-4 btn-lg btn-primary btn-block`}
            color="primary"
            disabled={!canSubmit || submitting}
          >
            {submitting ? <Spinner /> : "Submit"}
          </Button>
          <Row className="my-3">
            <Col sm="6">
              <p className="text-left">
                Need an account. <Link to="/auth/register">Sign Up</Link>
              </p>
            </Col>
            <Col sm="6">
              <p className="text-right">
                <Link to="/auth/forgot-password">Forgot password?</Link>
              </p>
            </Col>
          </Row>
        </Formsy>
        <p className="mt-4 mb-3 text-muted">
          <small>&copy; stakeways - {new Date().getFullYear()}</small>
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: styleConstants.secondaryColor,
    borderColor: styleConstants.secondaryColor,
    fontSize: "16px"
  }
});

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
    clearAlerts: bindActionCreators(alertActions.clear, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
