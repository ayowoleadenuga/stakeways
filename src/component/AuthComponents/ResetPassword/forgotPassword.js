import React, { Component } from "react";
import { Button, Container } from "reactstrap";
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
        <Container>
            <div className="col-md-6 offset-3">
                <Formsy
                    ref="resetPasswordForm"
                    onValidSubmit={this.handleSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    noValidate
                >
                <div className="grouped-form">
                    <TextInput
                        className="inputPassword"
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
                        className="inputPass"
                        name="newPassword"
                        title="New Password"
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
                        className="inputPass"
                        name="confirmPassword"
                        title="Confirm New Password"
                        validating={submitting}
                        type="password"
                        validations={{
                            equalsField: "newPassword"
                        }}
                        validationErrors={{
                            equalsField: "Passwords have to match"
                        }}
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="btn mt-4 btn-lg btn-primary btn-block"
                    color="primary"
                    disabled={!canSubmit || submitting}
                >
                    {submitting ? <Spinner /> : "Submit"}
                </Button>
                </Formsy>
            </div>
            
        </Container>
      </div>
    );
  }
}

// const styles = StyleSheet.create({
//   formControl: {
//     position: "relative",
//     boxSizing: "border-box",
//     height: "auto",
//     padding: "10px",
//     fontSize: "14px",
//     ":focus": {
//       zIndex: "2"
//     }
//   },
//   button: {
//     backgroundColor: "#901E78",
//     borderColor: "#901E78",
//     fontSize: "16px"
//   },
//   inputEmail: {
//     marginBottom: "-1px",
//     borderBottomRightRadius: "0",
//     borderBottomLeftRadius: "0"
//   },
//   inputPassword: {
//     marginBottom: "20px",
//     borderTopLeftRadius: "0",
//     borderTopRightRadius: "0"
//   }
// });
