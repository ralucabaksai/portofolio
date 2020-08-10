import React, { Component } from "react";
import "./education.css";

class Education extends Component {
  render() {
    // console.log(this.props);
    let educationDetailsClasses = "details";

    if (this.props.educationDrawerOpen) {
      educationDetailsClasses = "open";
    }
    return (
      <div className='education'>
        <p>
          {this.props.startYear}- {this.props.endYear}
        </p>
        <h4>{this.props.schoolName}</h4>
        <p>{this.props.diploma}</p>

        <button onClick={this.props.onClick}>Expand</button>
        <div className={educationDetailsClasses}>{this.props.details}</div>
      </div>
    );
  }
}
export default Education;
