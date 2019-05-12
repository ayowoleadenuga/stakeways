import { withFormsy, propTypes } from "formsy-react";
import React from "react";
import { FormGroup, FormFeedback, Label, Input, FormText } from "reactstrap";
import { Spinner } from "reactstrap";

export class TextInputComponent extends React.Component {
  
  changeValue = event => {
    
    if (
      event.target.value === "" ||
      this.props.isValidValue(event.target.value) ||
      this.props.type !== "text"
    ) {
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
      className,
      disabled,
      showRequired,
      showError,
      getValue,
      showLoader,
      name,
      size,
      onKeyUp,
      title,
      placeholder,
      isPristine,
      type,
      infoText,
      hasValue,
      isRequired,

    } = this.props;
    const hasError =
      !isPristine() && (showError() || (isRequired() && !hasValue()));

    return (
      <FormGroup className={className}>
        {title && (
          <Label className={isRequired() && "required"} htmlFor={name}>
           <span style={{color:"white"}}> {title}</span>
          </Label>
        )}

        <Input
          bsSize={size}
          invalid={hasError}
          type={type || "text"}
          value={getValue() || ""}
          disabled={validating ? true : false || disabled}
          onChange={this.changeValue}
          name={name}
          placeholder={placeholder}
          id={name}
          onKeyUp={onKeyUp}
          autoComplete="on"
        />

        {infoText ? <FormText>{infoText}</FormText> : ""}
        {hasError ? <FormFeedback>{errorMessage}</FormFeedback> : ""}
        {showRequired() ? <FormFeedback>Required</FormFeedback> : ""}
        {showLoader ? <Spinner /> : ""}
      </FormGroup>
    );
  }
}

TextInputComponent.propTypes = {
  ...propTypes,
};

const MyInput = withFormsy(TextInputComponent);

export { MyInput as TextInput };
