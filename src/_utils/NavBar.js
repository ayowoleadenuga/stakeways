import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { MdMenu } from "react-icons/md";
import PropTypes from "prop-types";

class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { toggleFullWidth } = this.props;
    return (
      <div>
        <Navbar light expand="md" className='navbar'>
          <NavbarBrand className="pointer" onClick={toggleFullWidth}>
            <MdMenu size={30} />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

export { CustomNavBar as CNavBar };
