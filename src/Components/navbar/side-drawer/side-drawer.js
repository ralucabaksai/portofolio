import React from "react";
import "./side-drawer.css";
import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {
  let drawerClasses = "side_drawer";

  if (props.show) {
    drawerClasses = `${drawerClasses} open`;
  }
  return (
    <nav className={drawerClasses} onClick={props.closeSideDrawer}>
      <ul>
        <NavLink exact to='/' activeClassName='selected'>
          <li>About Me</li>
        </NavLink>
        <NavLink exact to='/resume' activeClassName='selected'>
          <li>Resume</li>
        </NavLink>
        <NavLink exact to='/projects' activeClassName='selected'>
          <li>Projects</li>
        </NavLink>
        <NavLink exact to='/contact' activeClassName='selected'>
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideDrawer;
