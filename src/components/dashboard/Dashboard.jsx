import React, { Component } from "react";
import Notification from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { Grid } from "semantic-ui-react";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={12}>
            <ProjectList />
          </Grid.Column>
          <Grid.Column width={4}>
            <Notification />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
