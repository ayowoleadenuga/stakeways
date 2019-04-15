import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideMenu from "./index";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    isFullWidth: false
  };
  const enzymeWrapper = shallow(<SideMenu {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Side Menu", () => {
    it("should render", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
