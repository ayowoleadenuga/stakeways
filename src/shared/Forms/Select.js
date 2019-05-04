import React from "react";
import { withFormsy } from "formsy-react";
import { FormGroup, FormFeedback, Label } from "reactstrap";
import Select from "react-select";

const Styles = {
  control: styles => ({ ...styles, borderRadius: "0", marginTop: "-1px" })
};

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
      <FormGroup className="mb-0">
        {title && (
          <Label className={isRequired() && "required"} htmlFor={name}>
            {title}
          </Label>
        )}
        <Select
          value={getValue() || selectedOption}
          styles={Styles}
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
        {hasError ? <FormFeedback>{errorMessage}</FormFeedback> : ""}
        {showRequired() ? <FormFeedback>Required</FormFeedback> : ""}
      </FormGroup>
    );
  }
}

const FormSelect = withFormsy(MySelectComponent);

export { FormSelect as MySelect };
