import React from "react";
import SideMenuComponent from "./SideMenu";

const SideMenu = ({ isFullWidth, match }) => (
  <SideMenuComponent match={match} isFullWidth={isFullWidth} />
);

export default SideMenu;
