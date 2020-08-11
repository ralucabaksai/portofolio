import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: "30rem",
    background: "#e9dfdb",
    color: "#636fa4",
    margin: "1rem",
  },
  media: {
    height: "15rem",
    margin: "1rem",
  },
  title: {
    fontSize: "1.5rem",
  },
  button: {
    // display: " inline-block",
    outline: "none",
    border: 0,
    cursor: "pointer",
    verticalAlign: "middle",
    textDecoration: "none",
    borderRadius: "5rem",
    background: "#e9dfdb",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.35)",
    // height: "2rem",
    // width: "10rem",
    // color: "#636fa4",
    // fontSize: "0.7rem",
    fontWeight: "bold",
  },

  link: {
    color: "#636fa4",
    fontSize: "0.7rem",
    textDecoration: "none",
  },
});

function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        component='img'
        title={props.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='h2'
          className={classes.title}
        >
          {props.title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button className={classes.button}>
          <a
            className={classes.link}
            target='_blank'
            href={props.link}
            rel='noopener noreferrer'
          >
            Project Page
          </a>
        </Button>
        <Button className={classes.button}>
          <a
            className={classes.link}
            target='_blank'
            href={props.code}
            rel='noopener noreferrer'
          >
            Code on GitHub
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
