import React from "react";
import { Card } from "semantic-ui-react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => (
  <Card.Group>
    <ProjectSummary />
    <ProjectSummary />
    <ProjectSummary />
    <ProjectSummary />
    <ProjectSummary />
  </Card.Group>
);

export default ProjectList;
