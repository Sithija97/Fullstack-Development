import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectService from "../services/ProjectService";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const loadAllProjects = () => {
    ProjectService.getAll()
      .then((data) => setProjects(data))
      .catch((e) => console.log("Error: ", e));
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  return (
    <div>
      <h3>ProjectList</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Technologies</td>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.techStack}</td>
                <td>
                  <Link to={`/projects/${project.id}`}>
                    <button>details</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
