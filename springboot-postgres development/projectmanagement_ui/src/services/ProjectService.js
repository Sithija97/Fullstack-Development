import axios from "axios";
const baseUrl = "http://localhost:8080/api";

const getAllProjects = async () => {
  const response = await axios.get(`${baseUrl}/projects`);
  return response.data;
};

const getProjectById = async (id) => {
  const response = await axios.get(`${baseUrl}/projects/` + id);
  return response.data;
};

const addProject = async (project) => {
  await axios.post(`${baseUrl}/projects`,project)
}

const ProjectService = {
  getAllProjects,
  getProjectById,
  addProject
};

export default ProjectService;
