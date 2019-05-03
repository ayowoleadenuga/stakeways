import { withFormsy, propTypes } from "formsy-react";
import { FormFeedback } from "reactstrap";
import React from "react";
import { Spinner } from "../../shared";

class FormInput extends React.Component {
  changeValue = event => {
    if (
      this.props.isValidValue(event.target.value) ||
      this.props.type !== "text"
    ) {
      this.props.setValue(
        event.currentTarget[
          this.props.type === "checkbox" ? "checked" : "value"
        ]
      );
    } else if (event.target.value === "") {
      this.props.setValue(
        event.currentTarget[
          this.props.type === "checkbox" ? "checked" : "value"
        ]
      );
    }
  };

  render() {
    const errorMessage = this.props.getErrorMessage();
    const {
      validating,
      disabled,
      showRequired,
      showError,
      getValue,
      showLoader,
      name,
      onKeyUp,
      title,
      isPristine,
      type,
      hasValue
    } = this.props;
    const hasError = !isPristine() && (showError() || !hasValue());

    return (
      <div className="form-label-group">
        <input
          value={getValue() || ""}
          disabled={validating ? true : false || disabled}
          onChange={this.changeValue}
          name={name}
          type={type || "text"}
          onKeyUp={onKeyUp}
          id={name}
          className={hasError ? "is-invalid form-control" : "form-control"}
          placeholder={title}
        />
        <label htmlFor={name}>{title}</label>
        {hasError && errorMessage ? (
          <FormFeedback>{errorMessage}</FormFeedback>
        ) : (
          ""
        )}
        {showRequired() ? <FormFeedback>Required</FormFeedback> : ""}
        {showLoader ? <Spinner /> : ""}
      </div>
    );
  }
}

FormInput.propTypes = {
  ...propTypes
};

const MyInput = withFormsy(FormInput);

export { MyInput as TextInput };
