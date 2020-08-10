import React, { Component } from "react";
import "./resume.css";
import { Grid } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import avatar from "../aboutme-page/avatar.png";
import Education from "./education";
import Experience from "./experience";
const data = {
  education: [
    {
      startYear: "03.2020",
      endYear: "08.2020",
      schoolName: "It Informal School",
      diploma: "Front End Developer",
      details: `<ul>
<li> Web Concepts: How the web works, Client-Server architecture, protocols</li>
<li> HTTP: fundamentals about the protocol: methods, status codes, headers, cookies and sessions</li>
<li> HTML and CSS: how to build a responsive User Interface with semantic HTML elements</li>
<li> OOP in JavaScript: prototypes, classes and inheritance in JavaScript</li>
<li> GIT: learned the principles and basic commands</li>
<li> jQuery: how to include it in a project and how to use it, why it’s helpful, selectors</li>
<li> React JS: how modern JS applications work, React components, props, state, JSX </li></ul>`,
    },
    {
      startYear: "03.2019",
      endYear: "06.2019",
      schoolName: "Azimut School",
      diploma: "Software Product Owner",
      details: `<ul>
<li> General Software Development Knowledge and Methodologies</li>
<li> Agile Methodology – Scrum</li>
<li> Identify stakeholders and select appropriate techniques for eliciting the requirements</li>
<li> Requirements analysis - elicitation, validation, planning, specification and management</li>
</ul>`,
    },
  ],
  experience: [
    {
      startYear: "10.2019",
      endYear: "06.2020",
      jobName: "Project Manager",
      company: "Eastern Shipping SRL",
      jobDescription: `<ul><li> Project, oversized and heavy lift cargo transportations</li>
<li> Comunication with Clients (active, new, potential)</li>
<li> Transport rate request entry, logistic scheme work out, rate calculation, final offer generation</li>
<li> Order fullfillment: communication with executors (agents, shipping lines, truck owners, stevedore companies), customs</li>
<li> Multimodal FCL and LCL container loads, full truckloads</li>
<li> Maintaining Partners (Client and Executor) network.</li>
</ul>`,
    },
    {
      startYear: "05.2019",
      endYear: "10.2019",
      jobName: "CRM Implementation Consultant",
      company: "MiniCRM România",
      jobDescription: `<ul><li> Design and implement solutions with CRM software</li>
<li>Work directly with clients throughout the entire life-cycle of projects to define, design, and implement business process (active, new, potential)</li>
<li>Formulate recommendations and solutions with attention to the client’s needs, capabilities and limitations forming concise resolutions</li>
<li>Independently communicate with both client technical teams and business owners as needed during the design and implementation</li>
<li>Analyze business processes and recommend improvements.</li>
</ul>`,
    },
    {
      startYear: "10.2011",
      endYear: "04.2019",
      jobName: "Indoor Sales Executive",
      company: "TNT România",
      jobDescription: `<ul><li>Manage a group of small and medium consumer accounts in order to achieve designated sales targets through the implementation of appropriate and unique strategies</li>
<li>Assessing, clarifying and validating the consumers needs on an ongoing basis, maintaining high customer satisfaction ratings that are up to the business’s standards</li>
<li>Resolve any issues and problems faced by customers and deal with complaints to maintain trust</li>
<li>Prepare regular reports of progress and forecasts.</li>
</ul>`,
    },
  ],
};

class Resume extends Component {
  state = {
    educationDrawerOneOpen: false,
    educationDrawerTwoOpen: false,
    experienceDrawerOneOpen: false,
    experienceDrawerTwoOpen: false,
    experienceDrawerThreeOpen: false,
  };
  educationDrawerClickHandler = (name) => {
    switch (name) {
      case "educationDrawerOneOpen":
        this.setState({
          educationDrawerOneOpen: !this.state.educationDrawerOneOpen,
        });
        break;
      case "educationDrawerTwoOpen":
        this.setState({
          educationDrawerTwoOpen: !this.state.educationDrawerTwoOpen,
        });
        break;
      default:
        break;
    }
  };
  experienceDrawerClickHandler = (name) => {
    switch (name) {
      case "experienceDrawerOneOpen":
        this.setState({
          experienceDrawerOneOpen: !this.state.experienceDrawerOneOpen,
        });
        break;
      case "experienceDrawerTwoOpen":
        this.setState({
          experienceDrawerTwoOpen: !this.state.experienceDrawerTwoOpen,
        });
        break;
      case "experienceDrawerThreeOpen":
        this.setState({
          experienceDrawerThreeOpen: !this.state.experienceDrawerThreeOpen,
        });
        break;
      default:
        break;
    }
  };
  render() {
    const {
      educationDrawerOneOpen,
      educationDrawerTwoOpen,
      experienceDrawerOneOpen,
      experienceDrawerTwoOpen,
      experienceDrawerThreeOpen,
    } = this.state;
    return (
      <div className='resume'>
        <Grid container>
          <Grid item xs={12} sm={4} className='resumeLeftCol'>
            <img src={avatar} alt='Avatar'></img>
            <h2>Anca Raluca Baksai</h2>
            <h4>Front End Developer</h4>
            <p>
              Newly Junior Web Developer with 5 months of experience in web
              development. Focused on expanding knowledge and abilities in
              website design, programming and quality assurance.
            </p>
            <h5>Adress</h5>
            <p>Salistea noua, nr. 27E</p>
            <h5>Phone</h5>
            <p>(+40)772 201457</p>
            <h5>Email</h5>
            <p>ralucabaksai@gmail.com</p>
          </Grid>
          <Grid item xs={12} sm={8} className='resumeRightCol'>
            <h2>Education </h2>
            <Timeline align='alternate'>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Education
                    startYear={data.education[0].startYear}
                    endYear={data.education[0].endYear}
                    schoolName={data.education[0].schoolName}
                    diploma={data.education[0].diploma}
                    details={
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.education[0].details,
                        }}
                      ></div>
                    }
                    onClick={() =>
                      this.educationDrawerClickHandler("educationDrawerOneOpen")
                    }
                    educationDrawerOpen={educationDrawerOneOpen}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Education
                    startYear={data.education[1].startYear}
                    endYear={data.education[1].endYear}
                    schoolName={data.education[1].schoolName}
                    diploma={data.education[1].diploma}
                    details={
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.education[1].details,
                        }}
                      ></p>
                    }
                    onClick={() =>
                      this.educationDrawerClickHandler("educationDrawerTwoOpen")
                    }
                    educationDrawerOpen={educationDrawerTwoOpen}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <h2>Experience</h2>
            <Timeline align='alternate'>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Experience
                    startYear={data.experience[0].startYear}
                    endYear={data.experience[0].endYear}
                    jobName={data.experience[0].jobName}
                    company={data.experience[0].company}
                    jobDescription={
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.experience[0].jobDescription,
                        }}
                      ></p>
                    }
                    onClick={() =>
                      this.experienceDrawerClickHandler(
                        "experienceDrawerOneOpen"
                      )
                    }
                    experienceDrawerOpen={experienceDrawerOneOpen}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Experience
                    startYear={data.experience[1].startYear}
                    endYear={data.experience[1].endYear}
                    jobName={data.experience[1].jobName}
                    company={data.experience[1].company}
                    jobDescription={
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.experience[1].jobDescription,
                        }}
                      ></p>
                    }
                    onClick={() =>
                      this.experienceDrawerClickHandler(
                        "experienceDrawerTwoOpen"
                      )
                    }
                    experienceDrawerOpen={experienceDrawerTwoOpen}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Experience
                    startYear={data.experience[2].startYear}
                    endYear={data.experience[2].endYear}
                    jobName={data.experience[2].jobName}
                    company={data.experience[2].company}
                    jobDescription={
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.experience[2].jobDescription,
                        }}
                      ></p>
                    }
                    onClick={() =>
                      this.experienceDrawerClickHandler(
                        "experienceDrawerThreeOpen"
                      )
                    }
                    experienceDrawerOpen={experienceDrawerThreeOpen}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Resume;
