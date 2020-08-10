import React from "react";
import "./drawer-toggle-button.css";

const DrawerToggleButton = (props) => {
  let buttonClasses = "toggle_button";
  if (props.rotate) {
    buttonClasses = `${buttonClasses} open`;
  }
  return (
    <div className={buttonClasses} onClick={props.click}>
      <div className='bar half start'></div>
      <div className='bar'></div>
      <div className='bar half end'></div>
    </div>
  );
};

export default DrawerToggleButton;
