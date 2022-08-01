import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import ProjectService from "../services/ProjectService";
import Project from "./project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAllProjects = () => {
    setLoading(true)
    try {
      ProjectService.getAll()
        .then((data) => setProjects(data))
        .catch((e) => console.log("Error: ", e));
    } catch (error) {
      console.log('error :', error);
    }
    setLoading(false)
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  return (
    <div className='container mx-auto my-8'>
      <div className="h-12">
        <button className="rounded bg-blue-500 text-white px-6 py-2 font-semibold">Add Project</button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Name</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Description</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Tech Stack</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
            </tr>
          </thead>
          {
            !loading ? projects.map((project) => (
              <tbody className='bg-white' key={project.id}>
                <Project project={project} />
              </tbody>
            )) : <p>loading</p>
          }
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
