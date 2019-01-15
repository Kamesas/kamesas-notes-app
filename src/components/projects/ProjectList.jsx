import React from "react";
import { Card } from "semantic-ui-react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <Card.Group>
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </Card.Group>
  );
};

export default ProjectList;
