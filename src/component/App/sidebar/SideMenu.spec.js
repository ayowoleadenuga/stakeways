import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideMenuComponent from "./SideMenu";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    isFullWidth: false
  };
  const enzymeWrapper = shallow(<SideMenuComponent {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Side Menu Component", () => {
    it("should render", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
