import React from "react";
import { withFormsy } from "formsy-react";
import { FormGroup, FormFeedback, Label } from "reactstrap";
import Select from "react-select";

export class MySelectComponent extends React.Component {
  state = {
    selectedOption: null
  };

  changeValue = selectedOption => {
    this.setState({ selectedOption });
    this.props.setValue(selectedOption);
  };

  render() {
    const errorMessage = this.props.getErrorMessage();
    const {
      options,
      validating,
      valueKey,
      placeholder,
      labelKey,
      disabled,
      showRequired,
      onChange,
      showError,
      name,
      getValue,
      title,
      isPristine,
      isRequired,
      hasValue,
      isClearable
    } = this.props;
    const { selectedOption } = this.state;
    const hasError = !isPristine() && (showError() || !hasValue());
    return (
      <FormGroup className="mb-0 form-label-group">
        {title && (
          <Label className={isRequired() && "required"} htmlFor={name}>
            {title}
          </Label>
        )}
        <Select
          value={getValue() || selectedOption}
          styles={{
            control: styles => ({
              ...styles,
              borderRadius: "0",
              marginTop: "-1px",
              borderColor: showRequired() && !isPristine() ? "red" : "#ced4da"
            })
          }}
          className={hasError ? "is-invalid" : ""}
          placeholder={placeholder}
          options={options}
          isDisabled={validating ? true : false || disabled}
          name={name}
          isClearable={isClearable}
          onChange={onChange || this.changeValue}
          getOptionLabel={option => option[labelKey]}
          getOptionValue={option => option[valueKey]}
        />
        {hasError ? (
          <FormFeedback style={{ display: hasError ? "block" : "none" }}>
            {errorMessage}
          </FormFeedback>
        ) : (
          ""
        )}
        {showRequired() ? (
          <FormFeedback
            style={{
              display: showRequired() && !isPristine() ? "block" : "none"
            }}
          >
            Required
          </FormFeedback>
        ) : (
          ""
        )}
      </FormGroup>
    );
  }
}

const FormSelect = withFormsy(MySelectComponent);

export { FormSelect as MySelect };
