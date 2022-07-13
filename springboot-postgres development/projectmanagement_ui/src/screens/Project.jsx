import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectService from "../services/ProjectService";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  const loadProject = () => {
    ProjectService.getById(id)
      .then((data) => setProject(data))
      .catch((e) => console.log("Error: ", e));
  };

  useEffect(() => {
    loadProject();
  });

  return (
    <div>
      Project
      {project && (
        <div>
          <h4>name : {project.name}</h4>
          <h4>description : {project.description}</h4>
          <h4>tech : {project.techStack}</h4>
        </div>
      )}
    </div>
  );
};

export default Project;
