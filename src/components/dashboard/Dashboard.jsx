import React, { Component } from "react";
import Notification from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    const { projects } = this.props;
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={12}>
            <ProjectList projects={projects} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Notification />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
