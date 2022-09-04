import React, { useEffect, useState } from "react";
import AddModal from "../components/addProjectModal";
// import { Link } from "react-router-dom";
import ProjectService from "../services/ProjectService";
import Project from "./project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const loadProjects = () => {
    setLoading(true);
    try {
      ProjectService.getAllProjects()
        .then((data) => setProjects(data))
        .catch((e) => console.log("Error: ", e));
    } catch (error) {
      console.log("error :", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);


  return (
    <div className="container mx-auto my-8">
      <div className="px-10">
        <div className="h-12">
          <button
            className="rounded bg-blue-600 text-white px-6 py-2 font-semibold" onClick={() => setOpen(true)}>
            Add Project
          </button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Description
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Tech Stack
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {loading && (<h5>loading...</h5>)}
            {!loading && (
              projects.map((project) => (
                <tbody className="bg-white" key={project.id}>
                  <Project project={project} />
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProjectList;