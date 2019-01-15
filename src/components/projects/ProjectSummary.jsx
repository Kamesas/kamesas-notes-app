import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const ProjectSummary = ({ project }) => (
  <Card>
    <Card.Content>
      <Image
        floated="right"
        size="mini"
        src="https://react.semantic-ui.com/images/avatar/large/molly.png"
      />
      <Card.Header>{project.title}</Card.Header>
      <Card.Meta>New User</Card.Meta>
      <Card.Description>{project.content}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green">
          Approve
        </Button>
        <Button basic color="red">
          Decline
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default ProjectSummary;
