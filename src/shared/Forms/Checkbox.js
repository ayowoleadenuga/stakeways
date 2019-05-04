import React from 'react';
import { propTypes, withFormsy } from 'formsy-react';
import { FormGroup, FormFeedback, Label, Input } from "reactstrap";

export class CheckBoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      value: true,
    };
  }

  changeValue(event) {
    this.props.setValue(event.target.checked)
  }

  render() {
    const value = this.props.getValue();
    const errorMessage = this.props.getErrorMessage();
    const {name, title} = this.props

    return (
        <FormGroup>
            <div className="custom-control custom-checkbox mr-sm-2">
              <Input
                type="checkbox"
                className="custom-control-input"
                id={name}
                onChange={this.changeValue}
                checked={value}
                data-checked={value}
                invalid={Boolean(errorMessage)}
              />
              <Label className="custom-control-label" htmlFor={name}>
               {title}
              </Label>
              {errorMessage ? (
                <FormFeedback>{errorMessage}</FormFeedback>
              ) : (
                ""
              )}
            </div>
          </FormGroup>
    );
  }
}

CheckBoxComponent.propTypes = {
  ...propTypes,
};


  const CheckBox = withFormsy(CheckBoxComponent);
  
  export { CheckBox as MyCheckbox };
  