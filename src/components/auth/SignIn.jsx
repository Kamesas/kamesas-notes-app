import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
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

export default SignIn;
