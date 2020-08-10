import React from "react";
import TextField from "@material-ui/core/TextField";
import "./my-form.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    // console.log(data);
    fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        form.reset();
        this.setState({ status: "SUCCESS" });
      })
      .catch((error) => {
        // console.error("Error:", error);

        this.setState({ status: "ERROR" });
      });
  }
  render() {
    const { status } = this.state;

    return (
      <div className='myForm'>
        <h2>Let's chat</h2>
        <form
          onSubmit={this.submitForm}
          action='https://formspree.io/mgendlew'
          method='POST'
        >
          <TextField
            id='name'
            label='Name:'
            name='name'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
          />
          <TextField
            id='email'
            label='Your email adress:'
            name='email'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
          />

          <TextField
            id='message'
            label='Type your message here:'
            name='mesage'
            multiline
            rows={4}
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
          />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }
}
