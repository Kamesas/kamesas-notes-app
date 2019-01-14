import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { title, content } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            name="title"
            value={title}
            placeholder="title"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Content</label>
          <textarea
            value={content}
            placeholder="content"
            name="content"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button type="submit">Create</Button>
      </Form>
    );
  }
}

export default CreateProject;
