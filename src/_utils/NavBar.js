import React from "react";
import {Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from "reactstrap";
import { MdMenu } from "react-icons/md";
import PropTypes from "prop-types";
import { MdPowerSettingsNew } from "react-icons/md";
// import { authService } from "../component/AuthComponents/Login/services/auth.service";
// import { authActions } from "../component/AuthComponents/Login/actions/auth.actions";

class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      name: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logoutHandler = () => {
    const id = localStorage.getItem("auth");
    console.log(id)
    // authActions.logout()
    // document.location.reload()
  }
  
  render() {
    const { toggleFullWidth } = this.props;
    return (
      <div>
        <Navbar light expand="md" className='navbar'>
          <NavbarBrand className="pointer" onClick={toggleFullWidth}>
            <MdMenu size={30} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
              <NavItem>
                {this.state.name}
              </NavItem>
              <NavItem onClick={this.logoutHandler} className="pointer">
                <h4>Logout <MdPowerSettingsNew /></h4>
              </NavItem>
          </Nav>
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
