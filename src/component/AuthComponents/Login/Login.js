import React, { Component } from "react";
import { Button } from "reactstrap";

import { TextInput } from "../../../shared/Forms/TextInput";
import Formsy from "formsy-react";
import { StyleSheet, css } from "aphrodite";
import { styleConstants } from "../../../_constants";
import { Spinner } from "../../../shared";
export default class Login extends Component {
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
        <h4 className="h4 mb-3 font-weight-bold">Please sign in</h4>
        <Formsy
          ref="loginForm"
          onValidSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          noValidate
        >
          <div className="grouped-form">
            <TextInput
              name="email"
              title="Email"
              validating={submitting}
              type="text"
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
