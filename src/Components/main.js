import React from "react";
import AboutMe from "./aboutme-page/about-me";
import Resume from "./resume-page/resume";
import Projects from "./projects-page/projects";
import Contact from "./contact-page/contact";
import { Switch, Route } from "react-router-dom";
const Main = () => (
  <Switch>
    <Route exact path='/' component={AboutMe} />
    <Route exact path='/resume' component={Resume} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contact' component={Contact} />
  </Switch>
);
export default Main;
