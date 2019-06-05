import React, { Component } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../../../logo.png"
import "./SideMenu.scss";
import { routes, adminRoutes } from "../../../_constants";
import { payStackService } from "../transactions/services/PayStackServices";

class SideMenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  componentDidMount () {
    this.getUserDetails(this.props.response.result.userId)
  }
  getUserDetails = id => {
    payStackService
      .getUserDetails(id)
      .then(response => {
        this.setState({
          name: response.result.roleNames[0].toLowerCase()
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  render() {
    const { isFullWidth, match } = this.props;

    return (
      <Nav className={`sidebar ${isFullWidth ? "active" : ""}`} vertical navbar>
        <div className="sidebar-header">
          <img className="img" src={logo} alt="logo" />
        </div>
        {routes.map(route => (
          <div
            key={route.key}
            className={
              route.menuOptions && route.menuOptions.darken ? "darken" : null
            }
          >
            {route.menu && (
              <NavItem className='nav-item'>
                <NavLink to={`${match.path}${route.path}`} tag={RRNavLink}>
                  {route.icon({ size: 20 })}
                  {route.title}
                </NavLink>
              </NavItem>
            )}
          </div>
        ))}
        {this.state.name && this.state.name === "admin" ? adminRoutes.map(route => (
          <div
            key={route.key}
            className={
              route.menuOptions && route.menuOptions.darken ? "darken" : null
            }
          >
            {route.menu && (
              <NavItem className='nav-item'>
                <NavLink to={`${match.path}${route.path}`} tag={RRNavLink}>
                  {route.icon({ size: 20 })}
                  {route.title}
                </NavLink>
              </NavItem>
            )}
          </div>
        )) : null }
      </Nav>
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
};

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const mapStateToProps = state => {
  const { response } = state.auth;
  return {
    response,
  };
};
export default connect(
  mapStateToProps
)(SideMenuComponent);

