import React from "react";
import "./contact.css";
import { Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import MyForm from "./my-form";

function Contact() {
  return (
    <div>
      <Grid
        item
        container
        direction='row'
        justify='center'
        className='contactPage'
      >
        <Grid item xs={10} md={5} className='leftSide'>
          <h2>Anca Raluca Baksai</h2>
          <ul>
            <li>
              <PhoneIcon fontSize='large' />
              <span>
                <a href='tel:+40772201457'>+40772201457</a>
              </span>
            </li>
            <li>
              <MailIcon fontSize='large' />
              <span>
                <a href='mailto:ralucabaksai@gmail.com'>
                  ralucabaksai@gmail.com
                </a>
              </span>
            </li>
            <li>
              <LinkedInIcon fontSize='large' />
              <span>
                <a
                  href='https://www.linkedin.com/in/anca-raluca-baksai-44357223/'
                  rel='noopener noferrer'
                  target='blank'
                >
                  https://www.linkedin.com/in/anca-raluca-baksai-44357223/
                </a>
              </span>
            </li>
          </ul>
        </Grid>
        <Grid item xs={10} md={5} className='rightSide'>
          <MyForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
