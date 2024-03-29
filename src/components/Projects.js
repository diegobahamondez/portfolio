import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id = "projects">
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} key = {idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
