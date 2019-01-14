import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SignUp;
