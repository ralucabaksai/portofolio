import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import DrawerTaggleButton from "./side-drawer/drawer-toggle-button.js";

function NavBar(props) {
  return (
    <header className='navbar'>
      <nav className='navbar_navigation'>
        <div className='navbar_toggleButton'>
          <DrawerTaggleButton
            rotate={props.rotate}
            click={props.drawerClickHandler}
          />
        </div>
        <div className='navbar_logo'>
          <NavLink exact to='/' activeClassName='selected'>
            About me
          </NavLink>
        </div>
        <div className='spacer' />
        <div className='navbar_navigation_items'>
          <ul>
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
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
