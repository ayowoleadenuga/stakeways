import React from "react";
import {Nav,
  Navbar,
  NavbarBrand,
  NavItem, Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from "reactstrap";
import { connect } from "react-redux";
import { MdMenu } from "react-icons/md";
import PropTypes from "prop-types";
import { MdPowerSettingsNew, MdAccountBalance } from "react-icons/md";
// import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { authActions } from "../component/AuthComponents/Login/actions/auth.actions";
import { alertActions } from "../component/Alert/actions/alert.actions";
import { payStackService } from "../component/App/transactions/services/PayStackServices";
import { history } from "../_utils";

class CNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      name: "",
      costumerBalance: ""
    };
  }
  componentDidMount () {
    this.getUserDetails(this.props.response.result.userId)
  }
  getUserDetails = id => {
    payStackService
      .getUserDetails(id)
      .then(response => {
        console.log(response)
        this.setState({
          name: response.result.name,
          costumerBalance: response.result.balance,
        });
      })
      .catch(error => this.setState({ error: error }));
  };
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logoutHandler = () => {
    this.props.logout()
  }
  goToReset = () => {
    history.push("/app/reset-password");
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
            <NavItem className="mr mt">
              <h5><MdAccountBalance /> Balance: {this.state.costumerBalance}</h5>
            </NavItem>
            <NavItem className="mr">
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle nav>
                  <h5 className="idd">{this.state.name}</h5>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.logoutHandler}>Logout <MdPowerSettingsNew /></DropdownItem>
                    <DropdownItem onClick={this.goToReset}>Change Password</DropdownItem>
                </DropdownMenu>
              </Dropdown>
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

const mapStateToProps = state => {
  const { response } = state.auth;
  return {
    response,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(authActions.logout, dispatch),
    clearAlerts: bindActionCreators(alertActions.clear, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CNavBar);
