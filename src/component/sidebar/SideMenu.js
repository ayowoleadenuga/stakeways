import React, { Component } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import logo from "../../logo.png"
import "./SideMenu.scss";
import { routes } from "../../_constants";

class SideMenuComponent extends Component {
  render() {
    const { isFullWidth } = this.props;
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
                <NavLink to={route.path} tag={RRNavLink}>
                  {route.icon({ size: 20 })}
                  {route.title}
                </NavLink>
              </NavItem>
            )}
          </div>
        ))}
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

export default SideMenuComponent;
