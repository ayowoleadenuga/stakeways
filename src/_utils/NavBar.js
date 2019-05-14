import React from "react";
import {Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from "reactstrap";
import { connect } from "react-redux";
import { MdMenu } from "react-icons/md";
import PropTypes from "prop-types";
import { MdPowerSettingsNew } from "react-icons/md";
import { bindActionCreators } from "redux";
import { authActions } from "../component/AuthComponents/Login/actions/auth.actions";
import { alertActions } from "../component/Alert/actions/alert.actions";

class CNavBar extends React.Component {
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
    this.props.logout()
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

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(authActions.logout, dispatch),
    clearAlerts: bindActionCreators(alertActions.clear, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CNavBar);
