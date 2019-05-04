import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MySelectComponent } from "./Select";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    options: [],
    validating: false,
    valueKey: "value",
    labelKey: "label",
    disabled: false,
    showRequired: jest.fn(),
    onChange: jest.fn(),
    showError: jest.fn(),
    name: "test",
    getValue: jest.fn(),
    title: "test",
    isPristine: jest.fn(),
    isRequired: jest.fn(),
    hasValue: jest.fn(),
    getErrorMessage: jest.fn(),
    setValue: jest.fn(),
    isClearable: true
  };
  const enzymeWrapper = shallow(<MySelectComponent {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Select", () => {
    it("should render", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
