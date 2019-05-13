import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { styleConstants } from "../../../_constants";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Formsy from "formsy-react";
import { TextInput } from "../../../shared/Forms/TextInput";
import { Spinner } from "../../../shared";

export default class ResetPassword extends Component {
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
        <h4 className="h4 mb-3 font-weight-bold">Reset Password</h4>
        <Formsy
          ref="resetPasswordForm"
          onValidSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          noValidate
        >
          <div className="grouped-form">
            <TextInput
              name="password"
              title="Password"
              validating={submitting}
              type="password"
              validations={{
                minLength: 4
              }}
              validationErrors={{
                minLength: "You have to type at least 4 characters"
              }}
              required
            />
            <TextInput
              name="confirmPassword"
              title="Confirm Password"
              validating={submitting}
              type="password"
              validations={{
                equalsField: "password"
              }}
              validationErrors={{
                equalsField: "Passwords have to match"
              }}
              required
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
        </Formsy>

        <Row className="my-3">
          <Col>
            <p className="text-center">
              <Link to="/auth/login">Back to login</Link>
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
  inputPassword: {
    marginBottom: "10px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0"
  }
});
