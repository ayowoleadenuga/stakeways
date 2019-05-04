import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { styleConstants } from "../../../_constants";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Formsy from "formsy-react";
import { TextInput } from "../../../shared/Forms/TextInput";
import { Spinner } from "../../../shared";

export default class ForgotPassword extends Component {
  state = {
    canSubmit: false
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  handleSubmit = data => {
    console.log(data);
  };
  render() {
    const { canSubmit } = this.state;
    const { submitting } = this.props;
    return (
      <div>
        <h4 className="h4 mb-3 font-weight-bold">Recover Password</h4>
        <Formsy
          ref="forgotPasswordForm"
          onValidSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          noValidate
        >
          <TextInput
            name="email"
            title="Email"
            validating={submitting}
            type="email"
            required
          />
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
        </Formsy>
        <Row className="my-3">
          <Col sm="6">
            <p className="text-left">
              <Link to="/auth/login">Back to login</Link>
            </p>
          </Col>
          <Col sm="6">
            <p className="text-right">
              Need an account. <Link to="/auth/register">Sign Up</Link>
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
    marginBottom: "-1px"
  },
  inputPassword: {
    marginBottom: "10px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0"
  }
});
