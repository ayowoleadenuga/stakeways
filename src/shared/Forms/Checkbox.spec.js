import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CheckBoxComponent } from "./Checkbox";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    name: "test",
    title: "test",
    getValue: jest.fn(),
    getErrorMessage: jest.fn(),
    setValue: jest.fn()
  };
  const enzymeWrapper = shallow(<CheckBoxComponent {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Checkbox", () => {
    it("should render", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
