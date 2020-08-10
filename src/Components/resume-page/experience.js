import React, { Component } from "react";
import "./experience.css";
class Experience extends Component {
  render() {
    // console.log(this.props);
    let experienceDetailsClasses = "details";

    if (this.props.experienceDrawerOpen) {
      experienceDetailsClasses = "open";
    }
    return (
      <div className='experience'>
        <p>
          {this.props.startYear}- {this.props.endYear}
        </p>
        <h4>{this.props.jobName}</h4>
        <p>{this.props.company}</p>
        <button onClick={this.props.onClick}>Expand</button>
        <div className={experienceDetailsClasses}>
          {this.props.jobDescription}
        </div>
      </div>
    );
  }
}
export default Experience;
