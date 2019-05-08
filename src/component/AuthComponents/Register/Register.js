import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { styleConstants } from "../../../_constants";
import { Row, Col, Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import Formsy from "formsy-react";
import { TextInput } from "../../../shared/Forms/TextInput";
import { Spinner } from "../../../shared";
import { MyCheckbox } from "../../../shared/Forms/Checkbox";
import { MySelect } from "../../../shared/Forms/Select";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { registerActions } from "./actions/register.actions";
import { alertActions } from "../../Alert/actions/alert.actions";

class Register extends Component {
  state = {
    canSubmit: false
  };

  componentDidMount(){
    this.props.clearAlerts();
  }

  componentWillUnmount() {
    this.props.clearAlerts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submitted) {
      this.refs.registerForm.reset();
    }
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  handleSubmit = data => {
    this.props.register(data);
  };

  render() {
    const { canSubmit } = this.state;
    const { submitting, type, message } = this.props;
    return (
      <div>
        <h4 className="h4 mb-3 font-weight-bold">Please sign in</h4>
        {message && <Alert color={type}>{message}</Alert>}
        <Formsy
          ref="registerForm"
          onValidSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          noValidate
        >
          <div className="grouped-form">
            <TextInput
              name="name"
              title="Given Name"
              validating={submitting}
              type="text"
              required
            />
            <TextInput
              name="surname"
              title="Last Name"
              validating={submitting}
              type="text"
              required
            />
            <TextInput
              name="userName"
              title="User Name"
              validating={submitting}
              type="text"
              required
            />
            <TextInput
              name="emailAddress"
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
            <MySelect
              name="gender"
              value={null}
              placeholder="Select gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" }
              ]}
              valueKey="value"
              disabled={submitting}
              labelKey="label"
              validating={submitting}
              innerRef={c => {
                this.sex = c;
              }}
              isClearable={true}
              required
            />
          </div>
          <div className="my-3">
            <MyCheckbox
              name="terms"
              title="I accept the terms and conditions"
              validating={submitting}
              value={false}
              required="isFalse"
            />

            <MyCheckbox
              name="ageCheck"
              title="I am over 18"
              value={false}
              validating={submitting}
              required="isFalse"
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

const mapStateToProps = state => {
  const { submitting, submitted, request, response, error } = state.register;
  const { type, message, section } = state.alert;

  return {
    submitting,
    submitted,
    request,
    response,
    error,
    type,
    section,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: bindActionCreators(registerActions.register, dispatch),
    clearAlerts: bindActionCreators(alertActions.clear, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
