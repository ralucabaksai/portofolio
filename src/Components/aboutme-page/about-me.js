import React from "react";
import "./about-me.css";
import avatar from "./avatar.png";
import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function AboutMe() {
  return (
    <div className='AboutMe'>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item xs={12} md={10} style={{ textAlign: "center" }}>
          <img src={avatar} alt='Avatar'></img>
          <h1>Junior Front End Developer</h1>
          <p>HTML/CSS | JavaScript | React</p>
        </Grid>

        <Grid container item xs={12} justify='center' alignItems='center'>
          <Grid item xs={2} sm={1} style={{ textAlign: "center" }}>
            <a
              href='https://www.linkedin.com/in/anca-raluca-baksai-44357223/'
              rel='noopener noferrer'
              target='blank'
            >
              <LinkedInIcon fontSize='large' />
            </a>
          </Grid>
          <Grid item xs={2} sm={1} style={{ textAlign: "center" }}>
            <a
              href='https://github.com/ralucabaksai'
              rel='noopener noferrer'
              target='blank'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
