import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

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
    this.props.createProject(this.state);
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

const mapDispatchToProps = dispatch => {
  return { createProject: project => dispatch(createProject(project)) };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
