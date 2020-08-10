import React from "react";
import "./projects.css";
import { Grid } from "@material-ui/core";
import ProjectCard from "./project-card";
import Img_p1 from "./imgs/project-infinite-scroll1.jpg";
import Img_p2 from "./imgs/project-weather-app1.jpg";
import Img_p3 from "./imgs/project-canvas1.jpg";
import Img_p4 from "./imgs/project-blog1.jpg";
import Img_p5 from "./imgs/project-game1.jpg";
import Img_p6 from "./imgs/project-tic-tac-toe1.jpg";

function Projects() {
  return (
    <div className='projects'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Some of my projects</h1>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            component='img'
            img={Img_p1}
            title={"Infinite scrolling images"}
            link={"https://ralucabaksai.github.io/Infinite-Scrolling-React/"}
            code={"https://github.com/ralucabaksai/Infinite-Scrolling-React"}
          ></ProjectCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            component='img'
            img={Img_p2}
            title={"Weather application with cookies"}
            link={"https://ralucabaksai.github.io/Weather-app/"}
            code={"https://github.com/ralucabaksai/Weather-app"}
          ></ProjectCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            component='img'
            img={Img_p3}
            title={"Canvas animation"}
            link={"https://ralucabaksai.github.io/canvas/"}
            code={"https://github.com/ralucabaksai/canvas"}
          ></ProjectCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            component='img'
            img={Img_p4}
            title={"React blog page with pagination"}
            link={"https://ralucabaksai.github.io/blog/"}
            code={"https://github.com/ralucabaksai/blog/tree/master"}
          ></ProjectCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            img={Img_p5}
            component='img'
            title={"Javascript Game"}
            link={"https://ralucabaksai.github.io/My-ideea-of-a-game/"}
            code={"https://github.com/ralucabaksai/My-ideea-of-a-game"}
          ></ProjectCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            img={Img_p6}
            component='img'
            title={"React Tic-Tac-Toe Game"}
            link={"https://ralucabaksai.github.io/Tic-Tac-Toe-React/"}
            code={"https://github.com/ralucabaksai/Tic-Tac-Toe-React"}
          ></ProjectCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
